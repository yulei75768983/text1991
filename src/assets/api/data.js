import axios from 'axios'
axios.defaults.baseURL='../../../static'

export var getData = () =>{
  //1、谁调用getData方法，谁就拥有获取数据的权利
  //2、axios每次会返回自己的对象，所以这个函数的信息就在axios.then()
  return axios.get('cai.json').then((res)=>{
    return res.data;
  })
}

export var getData1 = () =>{
  //1、谁调用getData方法，谁就拥有获取数据的权利
  //2、axios每次会返回自己的对象，所以这个函数的信息就在axios.then()
  return axios.get('cai1.json').then((res)=>{
    return res.data;
  })
}

