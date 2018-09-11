import React from "react";
import { Modal, Button, Form, Input ,message} from "antd";
import { addRecord } from "../../../../services/apiStrategy";

class RecordModel extends React.Component {
  state = {
    modalVisible: false,
    loading: false
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  handleSubmitEvent = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { stocks = [] } = this.props;
        this.setState({ loading: true });
        try {
          await addRecord({
            recordName: values.recordName,
            stocks
          });
        }catch (e) {
          //TODO
        }
        this.setState({ loading: false,modalVisible:false });
        message.success(`已成功添加「${values.recordName}」`);
      }
    });
  };

  render() {
    const { loading } = this.state;
    const { getFieldDecorator, getFieldValue } = this.props.form;
    return (
      <div style={{ paddingTop: 40, width: "100%" }}>
        <Button
          style={{ background: "transparent" }}
          block
          size={"large"}
          icon={"plus"}
          type="dashed"
          onClick={() => this.setModalVisible(true)}
        >
          添加至自选股
        </Button>
        <Modal centered visible={this.state.modalVisible} footer={null}>
          <Form style={{ width: "100%" }} onSubmit={this.handleSubmitEvent}>
            <div style={{ display: "flex" }}>
              {getFieldDecorator("recordName")(
                <Input
                  style={{ width: "350px" }}
                  size="large"
                  placeholder="输入新建的自选股组名称"
                />
              )}

              <div style={{ width: 20 }} />
              <Button
                loading={loading}
                htmlType="submit"
                type="primary"
                size="large"
                disabled={!getFieldValue("recordName")}
              >
                新建
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(RecordModel);
