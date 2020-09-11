import { reactive, onMounted } from "@vue/composition-api";

const HelloWorld = ({ props: { name = 11, ...rest }, children }) => {
  const data = reactive({
    msg: "HelloWorld"
  });

  onMounted(() => {
    console.info("onMounted helloWorld");
  });

  return (
    <div {...rest}>
      {children}
      {data.msg}
      {name}
    </div>
  );
};

export default HelloWorld;
