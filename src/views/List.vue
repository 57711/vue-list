<template>
  <div class="list-page">
    <h1>News List</h1>
    <div id="scrollList" >
      <ListItem 
        v-for="item in data" 
        :key="item.path" 
        :data="item" 
        @checkboxChanged="handleCheckboxChange"
      />
    </div>
    <div v-if="loading" class="list-item">Loading...</div>
  </div>
</template>
<script>
import { debounce, uniqBy } from 'lodash';
import { setItem, getItem } from '../utils';
import axios from '../api';
import ListItem from '../components/ListItem';

export default {
  data(){
    return {
      data: [],
      savedList:[],
      unsavedList:[],
      error: '',
      loading: true,
      page: 1,
    }
  },
  components:{
    ListItem,
  },
  methods:{
    async getData(){
      this.loading = true;
      try{
        //const response = await axios.get('/getWangYiNews?count=7&page='+this.page);
        const response = await axios.get('/getWangYiNews',{
          params:{
            count: 7,
            page: this.page,
          }
        });
        if(response.data.code === 200){
          this.unsavedList.push(...response.data.result);
          this.page++;
        }else{
          this.error = response;
        }
        this.loading = false;
      }catch(e){
        this.error = e;
        this.loading = false;
      }
    },
    onScroll(){
      if(this.loading) return;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      if(scrollTop + clientHeight >= scrollHeight){
        this.getData();
      }
    },
    handleCheckboxChange(item){
      this.savedList = getItem('savedList');
      setItem('savedList', this.savedList, item);
      const i = this.unsavedList.findIndex(e => {
        return e.path === item.path;
      })
      if(item.checked){
        this.unsavedList.splice(i,1);
      }else{
        this.unsavedList.unshift(item);
      }
    },
    debouncedOnScroll(){
      const self = this;
      return debounce(self.onScroll, 500);
    },
  },
  created(){
    this.savedList = getItem('savedList');
    this.getData();
    window.addEventListener('scroll', this.debouncedOnScroll());
  },
  watch:{
    unsavedList(){
      this.savedList = getItem('savedList');
      this.data = [...this.savedList, ...this.unsavedList];
      this.data = uniqBy(this.data, 'path');
    },
  },
  destroyed(){
    window.removeEventListener('scroll', this.debouncedOnScroll());
  }
}
</script>
<style scoped>
.list-page{
  margin: 30px;
}
</style>
