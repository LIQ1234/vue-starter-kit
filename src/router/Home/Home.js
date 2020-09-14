import { reactive } from "@vue/composition-api";
import HelloWorld from "components/HelloWorld";
import styles from "./Home.module.scss";

const Home = () => {
  let data = reactive({
    test: 1
  });

  const handleClick = () => {
    console.info(data.test);
  };

  return () => (
    <div>
      <ElInput vModel={data.test}></ElInput>
      <ElButton onClick={handleClick} class={styles.home}>
        点击
      </ElButton>
      <HelloWorld name="ddd" title="111" type="222" data-id="1">
        <div class={styles.footer}>
          <ElButton>确定</ElButton>
        </div>
      </HelloWorld>
    </div>
  );
};

Home.props = {
  test: {
    type: Number,
    descrpition: "",
    default: 111
  }
};

export default Home;
