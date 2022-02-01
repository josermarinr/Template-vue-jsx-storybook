import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  props: {
    message: [String, Function] as <string | (() => string)>,
  },
  setup(props) {
    return () => {
      const message = props.message;
      return (
        <div id="app">
          <img alt="Vue logo" src="./assets/logo.png" width="25%" />
          <HelloWorld msg={typeof message === "string" ? message : message()} />
        </div>
      );
    };
  },
});