
export default {
  increment:({commit})=>{
        commit('increment');
  },
  decrement:({commit})=>{
        commit('decrement');
  },
  asyn:({commit})=>{
      new Promise((resolve)=>{
          setTimeout(() => {
              commit('increment');
              resolve()
          }, 2000);
      })
  }
}