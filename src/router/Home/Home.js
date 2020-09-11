import { reactive } from "@vue/composition-api";
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
    </div>
  );
};

export default Home;
