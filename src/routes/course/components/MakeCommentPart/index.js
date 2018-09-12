import React, { PureComponent } from "react";
import Authorization from "../../../../components/AuthorizationComponents/Authorization";
import Styles from "./index.module.less";
import { Link } from "react-router-dom";
import { Input, Button, Form } from "antd";
import ReplyPart from "./ReplyPart";

class MakeCommentPart extends PureComponent {
  handleCommentEvent = e => {
    e.preventDefault();
    this.props.form.validateFields( async (err, values) => {
      if (!err) {
        await this.props.onMakeComment(values.content);
        this.props.form.setFieldsValue({content:""})
      }
    });
  };

  render() {
    const { commenter, isReply, onCloseEvent, loading } = this.props;
    const { getFieldDecorator, getFieldValue } = this.props.form;
    return (
      <Authorization
        beforeAuthorization={
          <div className={Styles.beforeLogin}>
            <div className={Styles.greyPart}>
              <Link style={{ marginRight: 10 }} to={"/login"}>
                登陆
              </Link>
              后参与评论
            </div>
          </div>
        }
        afterAuthorization={
          <Form style={{ width: "100%" }} onSubmit={this.handleCommentEvent}>
            <div className={Styles.beforeLogin}>
              {getFieldDecorator("content")(
                <Input
                  addonBefore={
                    isReply ? (
                      <ReplyPart onCloseEvent={onCloseEvent} user={commenter} />
                    ) : (
                      undefined
                    )
                  }
                  size="large"
                  placeholder="在此输入评论内容"
                />
              )}

              <div style={{ width: 20 }} />
              <Button
                loading={loading}
                htmlType="submit"
                type="primary"
                size="large"
                disabled={!getFieldValue("content")}
              >
                评论
              </Button>
            </div>
          </Form>
        }
      />
    );
  }
}

export default Form.create()(MakeCommentPart);
