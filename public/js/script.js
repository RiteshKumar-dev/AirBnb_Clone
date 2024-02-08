// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener("submit", (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated')
        },
            false
        );
    });
})();

// GST Show 
let priceTogglebtn = document.getElementById('flexSwitchCheckDefault');
priceTogglebtn.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName('tax-info');
    for (tax of taxInfo) {
        if (tax.style.display != "inline") {
            tax.style.display = "inline";
        }
        else {
            tax.style.display = "none";
        }
    }
});