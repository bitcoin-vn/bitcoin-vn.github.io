const Component = React.Component;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '1Q9A5jDbZ8M6xUM5bCDhzqrn1NAd5mzKs8',
            privateKey: '5KYAzrBxRBEdiFt5DLf5tYUhmL7x6icS8BJbQA6HHmTg61yQUfE',
            addressOk: '1Q9A5jDbZ8M6xUM5bCDhzqrn1NAd5mzKs8',
            privateKeyOk: '5KYAzrBxRBEdiFt5DLf5tYUhmL7x6icS8BJbQA6HHmTg61yQUfE',
            urlTemplate: '/share/images/template-1.jpg',
            showPaperFirst: true,
            createCard: false,
            urlPaper1: '/share/images/bassic-paper-1.png',
            urlPaper2: '/share/images/bassic-paper-2.png',
            templateChoose: 1
        }
        this.renderModal();
    }
    onUpdateWallet(e) {
        var value = e.target.value;
        this.setState({address: value.slice(0, 34)});
    }
    onUpdatePrivateKey(e) {
        var value = e.target.value;
        this.setState({privateKey: value.slice(0, 51)});
    }
    onCreate(e) {
        //Hiển thị card
        this.setState({createCard: true});
        //================================
        //TODO Xóa id paperWallteQrChild
        var paperWallteQrChildRemove = document.getElementById('paper-wallte-qr-child');
        // Check null trước khi remove. nếu null không remove
        paperWallteQrChildRemove && paperWallteQrChildRemove.remove();
        //TODO Tạo id paperWallteQrChild nằm trong id paper-wallte-qr
        var paperWallteQrChild = document.createElement('div');
        paperWallteQrChild.setAttribute("id", "paper-wallte-qr-child");
        var paperWallteQr = document.getElementById('paper-wallte-qr');
        //Đưa id coh vừa mới tạo vào trong id cha
        paperWallteQr && paperWallteQrChild && paperWallteQr.appendChild(paperWallteQrChild);
        //================================

        //================================
        //TODO Xóa id paperPrivateKeyQrChild
        var paperPrivateKeyQrChildRemove = document.getElementById('paper-private-key-qr-child');
        // Check null trước khi remove. nếu null không remove
        paperPrivateKeyQrChildRemove && paperPrivateKeyQrChildRemove.remove();
        //TODO Tạo id paperPrivateKeyQrChild nằm trong id paper-private-key-qr
        var paperPrivateKeyQrChild = document.createElement('div');
        paperPrivateKeyQrChild.setAttribute("id", "paper-private-key-qr-child");
        var paperPrivateKeyQr = document.getElementById('paper-private-key-qr');
        //Đưa id coh vừa mới tạo vào trong id cha
        paperPrivateKeyQr && paperPrivateKeyQrChild && paperPrivateKeyQr.appendChild(paperPrivateKeyQrChild);
        //================================
        
        var address = this.state.address;
        var privatekey = this.state.privateKey;
        //Set data
        this.setState({addressOk: address});
        this.setState({privateKeyOk: privatekey});
        
        //TODO Create QR-Code address wallet
        var wallet = "bitcoin:" + address;
        var qrcode1 = new QRCode("paper-wallte-qr-child", {
			width: 90,
			height: 90
        });
        qrcode1.makeCode(wallet);
        //TODO Create QR-Code  private-key
        var qrcode2 = new QRCode("paper-private-key-qr-child", {
            width: 115,
			height: 115
        });
        qrcode2.makeCode(privatekey);
    }
    renderModal() {
        let absUrl = window.location.href;
        const modal = new Modal();
        setTimeout(() => {
            document.getElementById('modal').innerHTML = modal.show(modal.btcAddress(), absUrl);
            const qrcode = new QRCode("qr-code-url", {
                width: 170,
                height: 170
            });
            qrcode.makeCode(absUrl);
        }, 1000);
    }
    onOption(e) {
        var number = parseInt(e.target.value);
        this.setState({templateChoose: number});
        switch(parseInt(number)) {
            case 1:
                this.setState({urlTemplate: "/share/images/template-1.jpg"})
                this.setState({urlPaper1: "/share/images/bassic-paper-1.png"})
                this.setState({urlPaper2: "/share/images/bassic-paper-2.png"})
                break;
            case 2:
                this.setState({urlTemplate: "/share/images/template-2.jpg"})
                this.setState({urlPaper1: "/share/images/btc-cash-paper-1.png"})
                this.setState({urlPaper2: "/share/images/btc-cash-paper-2.png"})
                break;
            case 3:
                this.setState({urlTemplate: "/share/images/template-3.jpg"})
                this.setState({urlPaper1: "/share/images/btc-meristmas-paper-1.png"})
                this.setState({urlPaper2: "/share/images/btc-meristmas-paper-2.png"})
                break;
            case 4:
                this.setState({urlTemplate: "/share/images/template-4.jpg"})
                this.setState({urlPaper1: "/share/images/happy-new-yaer-china-simpified-1.png"})
                this.setState({urlPaper2: "/share/images/happy-new-yaer-china-simpified-2.png"})
                break;
            case 5:
                this.setState({urlTemplate: "/share/images/template-5.jpg"})
                this.setState({urlPaper1: "/share/images/happy-new-yaer-china-traditional-1.png"})
                this.setState({urlPaper2: "/share/images/happy-new-yaer-china-traditional-2.png"})
                break;
            default:
                console.log(this.state.urlTemplate);
        }
    }
    onNext(e) {
        this.setState({showPaperFirst: !this.state.showPaperFirst});
    }
    render() {
        return (
            <div>
                <div className="m-2">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="w400 text-center">Templates</th>
                                <th className="w600 text-center">Setup Bitcoin Infomation</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className="text-center">
                                    <img src={this.state.urlTemplate} className="shadow"/>
                                    <br/>
                                    <label for="exampleSelect1">Template select</label>
                                    <div className="form-group">
                                        <select onChange={this.onOption.bind(this)} className="form-control alert-primary col-7 m-auto" id="exampleSelect1">
                                            <option value="1"> Standard Bitcoin Design </option>
                                            <option value="2"> Bitcoin Cash Design </option>
                                            <option value="3"> Christmas Bitcoin English </option>
                                            <option value="4"> China New Year Bitcoin Simplified </option>
                                            <option value="5"> China New Year Bitcoin Tranditional </option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <label className="col-12">Private Key:
                                    <input type="text" onChange={this.onUpdatePrivateKey.bind(this)} placeholder="5KYAzrBxRBEdiFt5DLf5tYUhmL7x6icS8BJbQA6HHmTg61yQUfE" className="form-control"/>
                                </label>
                                <label className="col-8">Address Wallet:
                                    <input type="text" maxlength="34" onChange={this.onUpdateWallet.bind(this)} placeholder="1Q9A5jDbZ8M6xUM5bCDhzqrn1NAd5mzKs8" className="form-control"/>
                                </label><br/>
                                <button onClick={this.onCreate.bind(this)} data-toggle="modal" data-target="#show-card" className="btn btn-outline-info ml-3 mt-3">Create New Paper</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="modal fade" id="show-card" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-paper" role="document">
                        <div className="modal-content alert-dark-opacity-1">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Press Ctrl+P To Print</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="paper m-auto">
                                    <div id="paperarea">
                                        <div className="artwallet" id="artwallet1" style={{ display: this.state.showPaperFirst ? 'block':'none' }}>
                                            <img className="papersvg" id="papersvg1" src={this.state.urlPaper1} width="100%"/>
                                            <div className="btcaddress" id="btcaddress1">{this.state.addressOk}</div>
                                            <div className="dupbtcaddress" id="dupbtcaddress1">{this.state.addressOk}</div>
                                            <div className="btcprivwif" id="btcprivwif1">{this.state.privateKeyOk}</div>
                                            <div className="dupbtcprivwif" id="dupbtcprivwif1">{this.state.privateKeyOk}</div>
                                            <div className="wallettype" id="wallettype1"></div>
                                            <div id="paper-wallte-qr"></div>
                                            <div id="paper-private-key-qr"></div>
                                        </div>
                                        <div className="artwallet2" style={{ display: this.state.showPaperFirst ? 'none':'block' }}>
                                            <img className="papersvg2" src={this.state.urlPaper2} width="100%"/>
                                            {this.state.templateChoose == 1 ?
                                                <table className="dot-table table-borderless artwallet2text">
                                                    <tr>
                                                        <td> Full Name </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Address </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Phone </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Balance </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Other Info </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Singature </td>
                                                    </tr>
                                                </table> : <div/>
                                            }
                                        </div>
                                        <div className="text-center">
                                            <button onClick={this.onNext.bind(this)} className="btn alert-success mt-3">
                                                {this.state.showPaperFirst ? 'Next >>' : '<< Previous'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="modal"></div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);