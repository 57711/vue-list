export const setItem = (key, list, item) => {
	if(item.checked){ //add to local storage
		list.push(item);
	}else{// remove from local storage
		const i = list.findIndex(element =>{
			return element.path === item.path;
		});
		list.splice(i,1);
	}
	localStorage.setItem(key, JSON.stringify(list));
}
export const getItem = key => {
	if(localStorage.getItem(key)){
		return JSON.parse(localStorage.getItem(key));
	}else{
		return [];
	}
}
export const removeItem = key => {
	localStorage.removeItem(key);
}