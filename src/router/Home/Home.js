import { reactive } from "@vue/composition-api";
import HelloWorld from "components/HelloWorld";
import HELLO from "gql/hello.graphql";
import styles from "./Home.module.scss";

const Home = (props, { root }) => {
  let data = reactive({
    test: 1
  });

  const handleClick = async () => {
    const { data } = await root.$apollo.query({
      query: HELLO,
      fetchPolicy: "no-cache"
    });
    console.info(data);
  };

  return () => (
    <div>
      <ApolloQuery query={HELLO}>
        {data => {
          const { isLoading, gqlError, result } = data;
          if (isLoading) return null;
          if (gqlError) return gqlError;
          const {
            data: { hello }
          } = result;

          return <div>{hello}</div>;
        }}
      </ApolloQuery>
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
