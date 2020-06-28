
        function getId(id) {
            return document.getElementById(id);
        }



        let elements = {
            number: getId("numbers"),
            increase: getId("incr"),
            decrease: getId("decr"),
        }


        elements.increase.addEventListener("click", function () {
            return elements.number.value++;
        })

        elements.decrease.addEventListener("click", function () {
            return elements.number.value--;
        })