$('document').ready(() => {

    function addMoreOptionInput() {
        $(this).parent().before(`
            <div class="has-feedback extra-option">
                <input type="text" name="poll[options][]" class="form-control" placeholder="Extra Option" required>
                <span class="glyphicon glyphicon-remove form-control-feedback extra-option-close" aria-hidden="true"></span>
            </div>
        `);
    };

    function removeMoreOptionInput() {
        $(this).closest('.extra-option').remove();
    };

    $('#more-options').on('click', addMoreOptionInput);
    $('.form-group').on('click', '.extra-option-close', removeMoreOptionInput);

});