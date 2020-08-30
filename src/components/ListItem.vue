<template>
  <div class="list-item">
    <p class="list-item-time">{{data.passtime}}</p>
    <div class="list-item-content">
      <h2 class="list-item-title">
        <a :href="data.path">{{data.title}}</a>
      </h2>
      <img class="list-item-img" :src="data.image" />
    </div>
    <div class="list-checkbox-container">
      <label :for="data.path">
        <input 
          type="checkbox" 
          :id="data.path"
          :value="data.path" 
          :checked="data.checked" 
          @change="onChange(data)"
          v-model="data.checked"
          class="list-checkbox"
        />
        <span v-if="data.checked"> News saved</span>
        <span v-else> Check to save this news</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListItem",
  props: {
    data: Object,
  },
  methods:{
    onChange(data){
      this.$emit('checkboxChanged', data);
    }
  },
  computed:{

  }
};
</script>
<style>
.list-item{
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 25px;
  color: #333;
  box-shadow: 0px 0px 4px #d2d2d2;
}
.list-item-content{
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-between;
  width: 100%;
}
.list-item-title{
  margin-right:10px;
}
.list-item-time{
  font-size: 12px;
  margin:15px 0;
}
.list-checkbox-container{
  /* cursor: pointer; */
  margin-top: 20px;
}
</style>>