const bus1 = function (Vue) {
  const Bus = new Vue({
    data(){
      return {
        num: 10
      }
    },
    methods: {
      emit(event, ...args){
        this.$emit(event, ...args);
      },
      on(event, callback){
        console.log('on....');
        this.$on(event, callback);
      },
      off(event, callback){
        this.$off(event, callback);
      }
    }
  });
  Vue.prototype.$bus = Bus;
}
export default bus1;
