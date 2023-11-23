document.addEventListener("DOMContentLoaded", function() {
    var clickableDivs = document.querySelectorAll('.abrir-modal');
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("fechar")[0];

    clickableDivs.forEach(function(div) {
        div.addEventListener('click', function() {
            var imageUrl = this.getAttribute('data-image-url');
            document.getElementById('modal-imagem').src = imageUrl;
            modal.style.display = "flex";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    console.log('Modal display style on load:', modal.style.display);
});