import { Fragment, useEffect } from "react";
import { Button, Flex, Image, Pagination, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import getCategories from "../../../redux/actions/categories";
import imgURL from "../../../utils/getImgUrl";
import { CATEGORIES } from "../../../redux/types";

const AdminCategories = () => {
  const { categories, loading, total, page } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch, page]);

  const editCategory = (id) => {
    console.log(id);
  };

  const deleteCategory = (id) => {
    console.log(id);
  };

  const handlePage = (p) => {
    dispatch({ type: CATEGORIES, payload: { page: p } });
  };

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      render: (photo, record) => (
        <Image
          width={50}
          height={50}
          src={imgURL(photo)}
          alt={record.name}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "_id",
      render: (_id) => (
        <Flex gap={"small"}>
          <Button onClick={() => editCategory(_id)} type="primary">
            Edit
          </Button>
          <Button onClick={() => deleteCategory(_id)} type="primary" danger>
            Delete
          </Button>
        </Flex>
      ),
    },
  ];

  return (
    <Fragment>
      <Table
        columns={columns}
        dataSource={categories}
        pagination={false}
        loading={loading}
      />
      <Pagination defaultCurrent={1} total={total} onChange={handlePage} />
    </Fragment>
  );
};

export default AdminCategories;
