const btnOpen = document.getElementById('installnow');
const modalContainer = document.getElementById('modal-container');
const btnClose = document.getElementById('close');

btnOpen.addEventListener('click', () => {
    modalContainer.classList.add('show')
});

btnClose.addEventListener('click', () => {
    modalContainer.classList.remove('show')
});

(function ($) {

    "use strict";



    var oldIEVersion;

    if ($('#ieVersion').is('.ie6, .ie7')) {

        oldIEVersion = true;

    }



    if (oldIEVersion) {

        SP.SOD.executeFunc('sp.js', 'SP.ClientContext', displayOldBrowserAlert);

    }

}(jQuery));



    function displayOldBrowserAlert() {

        SP.UI.ModalDialog.showModalDialog({

            title: "Browser Not Supported",

            width: 500,

            height: 370,

            html: document.getElementById("oldBrowserMessage")

        });

        $("#oldBrowserMessage").removeClass("hidden");

    }  



//]]>