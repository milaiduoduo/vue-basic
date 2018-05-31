const bus1 = function (Vue) {
  const Bus = new Vue({
    data(){
      return {
        num: 10
      }
    },
    methods: {
      emit(event, ...args){
        console.log('bus emit....');
        this.$emit(event, ...args);
      },
      on(event, callback){
        console.log('bus on....');
        this.$on(event, callback);
      },
      off(event, callback){
        console.log('bus off....');
        this.$off(event, callback);
      }
    }
  });
  Vue.prototype.$bus = Bus;
}
export default bus1;
