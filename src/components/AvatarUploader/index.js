// author @antd @kunduin

import { Upload, Icon } from "antd";
import React from "react";
import { version } from "../../services/apiOverview";
import { getToken } from "../../utils/authorization";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

class AvatarUploader extends React.Component {
  constructor(props) {
    super(props);

    const value = props.value;
    this.state = {
      loading: false,
      imageUrl: value
    };
  }
  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          loading: false
        })
      );

      const {
        onChange = () => {},
        specialCode = "?x-oss-process=style/avatar"
      } = this.props;
      if (onChange) {
        onChange(info.file.response.url + specialCode);
      }
    }
  };

  render() {
    const { width = 100, height = 100 } = this.props;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={`${version}/user/avatar`}
        onChange={this.handleChange}
        headers={{
          Authorization: getToken()
        }}
      >
        {this.props.value && !this.state.loading ? (
          <img
            width={width}
            height={height}
            src={this.props.value}
            alt="avatar"
          />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}

export default AvatarUploader;
