var Modal;
! function() {
  Modal = function() {
    // this constructor
  }, Modal.prototype.show = function(btcAddress, absUrl) {
    return `<!-- Modal -->
    <div class="modal fade" id="qrCodeUrl" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
       <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
             <div class="modal-header">
                <h5 class="modal-title text-info m-auto">Scan qr code to access website</h5>
             </div>
             <div class="modal-body text-center">
                <pre class="m-0 text-black">${absUrl}</pre>
                <div id="qr-code-url"></div>
             </div>
             <div class="modal-footer m-auto">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             </div>
          </div>
       </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="donate" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
       <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
             <div class="modal-header">
                <h5 class="modal-title text-info m-auto">Donate to project</h5>
             </div>
             <div class="modal-body text-center">
                <pre class="m-0 text-black h6">Please Donate To Bitcoin Address:</pre>
                <a class="m-0 text-black h8" target="_blank" href="https://www.blockchain.com/btc/address/${btcAddress}"><pre>${btcAddress}</pre></a>
                <img src="./../share/images/qr-code-donate.png" width="200" />
             </div>
             <div class="modal-footer m-auto">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             </div>
          </div>
       </div>
    </div>`;
   }, Modal.prototype.btcAddress = function() {
      return '1Q9A5jDbZ8M6xUM5bCDhzqrn1NAd5mzKs8';
   }
}()