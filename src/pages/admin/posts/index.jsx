import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPosts from "../../../redux/actions/posts";
import { Button, Flex, Image, Pagination, Table } from "antd";
import imgURL from "../../../utils/getImgUrl";
import { POSTS } from "../../../redux/types";

const AdminPosts = () => {
  const { posts, loading, total, page } = useSelector((state) => state.posts);
  console.log(page, "pag");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, page]);

  const editPost = (id) => {
    console.log(id);
  };

  const deletePost = (id) => {
    console.log(id);
  };

  const handlePage = (page) =>{
    dispatch({type: POSTS, payload: {page}});
  }

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      render: (photo) => <Image width={50} height={50} src={imgURL(photo)} />,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "_id",
      render: (_id) => (
        <Flex gap={"small"}>
          <Button onClick={() => editPost(_id)} type="primary">
            Edit
          </Button>
          <Button onClick={() => deletePost(_id)} danger type="primary">
            Delete
          </Button>
        </Flex>
      ),
    },
  ];

  return (
    <Fragment>
      <Table
      title={() => (
        <Flex justify="space-between" align="center">
          <h1>Posts quantity: {total}</h1>
          <Button type="dashed">Add Post</Button>
        </Flex>
      )}
      columns={columns}
      dataSource={posts}
      pagination={false}
      loading={loading}
    />
    <Pagination defaultCurrent={1} total={total}  onChange={handlePage} />
    </Fragment>
  );
};

export default AdminPosts;
