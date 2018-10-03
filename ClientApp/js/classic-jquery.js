import $ from 'jquery';


$.validator.setDefaults({
    highlight: function (element) {
        $(element).addClass("is-invalid");
    },
    unhighlight: function (element) {
        $(element).removeClass("is-invalid");
    }
});
