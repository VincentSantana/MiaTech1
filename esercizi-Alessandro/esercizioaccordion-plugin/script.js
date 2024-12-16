const $root = document.querySelector("#accordion-box");

document.addEventListener("click", (event) => {
    const $trigger = event.target.closest(".accordion__header"); //si fa click in questo (container tab)
    if (!$trigger) {
        const $target = $trigger.closest(".accordion__wrapper");
        const $targetOpen = $root.querySelector(".accordion__wrapper.open");

        //questo serve a che gli altri si chiudano:
            $targetOpen?.classList.remove("open");
        //altri metodi
       /* if ($target.classList.contains("open")) {
            $target.classList.remove("open");
        } else {
            $target.classList.add("open");
        }*/

        //$target.classList.contains("open") ? $targetOpen?.classList.remove("open") : $targetOpen?.classList.add("open");

        $target.classList[$target.classList.contains("open") ? "remove" : "add"]("open");
    }
});
    