import { pathConcat } from "maishu-toolkit";
import { buttonOnClick } from "maishu-ui-toolkit";
import * as  React from "react";
import { ComponentStationConfig, LocalService } from "../services/local-service";
import strings from "../strings";
import websiteConfig from "../website-config";

let localService = new LocalService();

interface Props {
}

interface State {
    themes?: ComponentStationConfig["themes"]
}

export default class extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
        localService.componentStationConfig().then(c => {
            this.setState({ themes: c.themes });
        })
    }

    selectTheme(name: string) {
        return localService.setTheme(name)
    }

    render() {

        let { themes } = this.state;
        if (this.state.themes === undefined) {
            return <div className="empty">{strings.dataLoading}</div>
        }


        if (this.state.themes.length == 0) {
            return <div className="empty">{strings.dataEmpty}</div>
        }

        return <div className="row">
            {themes.map(o =>
                <div key={o.path} className="col-md-3 text-center">
                    <img src={pathConcat(websiteConfig.componentStationPath, o.image)} className="img-responsive"
                        style={{ border: "solid 1px #cccccc" }} />

                    <button className="btn btn-primary btn-block" style={{ marginTop: 20 }}
                        ref={e => {
                            if (!e) return;
                            buttonOnClick(e, () => this.selectTheme(o.name));
                        }}>
                        <i className="glyphicon glyphicon-ok"></i>
                        <span>选择模板</span>
                    </button>
                </div>
            )}
        </div>
    }
}