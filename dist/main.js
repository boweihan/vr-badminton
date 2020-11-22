AFRAME.registerComponent("log", {
  schema: { type: "string" },
  init: function () {
    var t = this.data;
    console.log(t);
  },
});
