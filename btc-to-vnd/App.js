const Component = React.Component;
const style = {
    background: '#77889959',
    color: '#a4ca11',
    colorResult: '#00ff21'
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bitcoin: '',
            amount: '',
            output: '',
            rate: '',
            isChecked: true,
            price_vnd: ''
        }
        this.renderModal();
    }
    onUpdateAmout (e) {
        this.setState({amount: e.target.value});
    }
    onUpdatePriceVnd (e) {
        this.setState({price_vnd: e.target.value});
    }
    onCalculator(e) {
        e.preventDefault();
        if(!this.state.amount.trim()){
            alert("Vui lòng kiểm tra lại số tiền bạn muốn chuyển đổi");
        } else if (this.state.isChecked) {
            var myUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCVND';
            axios.get(myUrl)
            .then(res => {
                this.setState({output: this.moneyFormat(this.state.amount * res.data.ask, "VND")});
                this.setState({rate:  this.moneyFormat(res.data.ask,'VND')});
            })
        } else {
            if(!this.state.price_vnd.trim()){
                alert("Vui lòng kiểm tra lại số tiền bạn muốn chuyển đổi");
            }
            this.setState({output: this.moneyFormat(this.state.amount * this.state.price_vnd, "VND")});
            this.setState({rate:  this.moneyFormat(this.state.price_vnd,'VND')});
        }
    }
    moneyFormat(n, currency) {
        const output = new Intl.NumberFormat('vi', {
            style: 'currency',
            currency: currency
        }).format(n);
        return output;
    }
    handleChecked(e) {
        this.setState({isChecked: !this.state.isChecked});
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
    render() {
        return (
            <div className="m-4">
                <div className="shadow col-md-8 d-block m-auto" style={{background: style.background, color: style.color}}>
                    <div className="p-4">
                        <h2>Convert BTC to VND</h2>
                        
                        <form onSubmit={this.onCalculator.bind(this)}>
                            <div className="row mt-3 mb-3">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="deposit">Bitcoin: </label>
                                        <div className="input-group">
                                            <div className="input-group-addon">BTC</div>
                                            <input onChange={this.onUpdateAmout.bind(this)} className="form-control border-green" type="text"
                                                style={{borderTopTightRadius: '.25rem'}} value={this.state.amount }/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="deposit">Vietnamese Dong: <span className="text-warning">{this.state.rate}</span></label>
                                        <div className="input-group">
                                            <input className="form-control border-green" type="text"
                                                style={{borderTopTightRadius: '.25rem'}} value={this.state.output }/>
                                                <div className="input-group-addon">VND</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="m-auto">
                                <input type="checkbox" defaultChecked={this.state.isChecked} onChange={ this.handleChecked.bind(this)}/> Automatic price 
                                {!this.state.isChecked ? 
                                    <div className="form-group my-3">
                                        <label for="deposit">Estimate VND/BTC:</label>
                                        <div className="input-group">
                                            <div className="input-group-addon">VND</div>
                                            <input onChange={this.onUpdatePriceVnd.bind(this)} className="form-control border-green" type="text" style={{borderTopTightRadius: '.25rem'}} value={this.state.price_vnd }/>
                                        </div>
                                    </div>
                                : ''}
                            </div>
                            <div className="text-center">
                                <button className="btn btn-outline-info">Calculate</button>
                            </div>
                        </form>

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
