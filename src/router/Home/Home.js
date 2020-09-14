import { reactive } from "@vue/composition-api";
import ApolloQuery from "vue-apollo";
import HelloWorld from "components/HelloWorld";
import HELLO from "data/gql/hello.graphql";
import styles from "./Home.module.scss";

const Home = (props, { root }) => {
  let data = reactive({
    test: 1
  });

  const handleClick = async () => {
    // console.info(data.test);
    console.info(root.$apollo.query);

    const data = await root.$apollo.query({
      query: HELLO,
      fetchPolicy: "no-cache"
    });
    console.info(data);
  };
  console.info(root);
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
