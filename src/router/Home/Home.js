import { reactive } from "@vue/composition-api";
import HelloWorld from "components/HelloWorld";
import HELLO from "gql/hello.graphql";
import styles from "./Home.module.scss";

const Home = (props, { root }) => {
  let data = reactive({
    test: 1,
    page: 1,
    currentSize: 20
  });

  const handleClick = async () => {
    const { data } = await root.$apollo.query({
      query: HELLO,
      fetchPolicy: "no-cache"
    });
  };

  return () => (
    <div>
      <ApolloQuery
        query={HELLO}
        variables={{
          page: data.page,
          currentSize: data.pageSize
        }}
      >
        {({ isLoading, gqlError, result, query: { fetchMore, refetch } }) => {
          if (isLoading) return null;
          if (gqlError) return gqlError;

          const {
            data: { hello }
          } = result;

          return (
            <div>
              {hello.page}
              <ElButton
                onClick={() => {
                  // data.page = 2;
                  refetch();
                }}
                class={styles.home}
              >
                重载
              </ElButton>
            </div>
          );
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
