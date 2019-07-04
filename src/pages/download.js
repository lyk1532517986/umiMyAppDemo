import React from 'react';
import { Button ,Icon } from 'antd';




class download extends React.Component {

    TODODownLoad = () => {
        fetch('../service/Egg/fairytaleTown.flac').then(res => res.blob()).then(blob => {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(blob);
            var filename = '童话镇.flac';
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        })
    };

    render() {
        return (
            <Button onClick={this.TODODownLoad}>
                <Icon type="download"/> Click to download
            </Button>
        )
    }
}

export default download;