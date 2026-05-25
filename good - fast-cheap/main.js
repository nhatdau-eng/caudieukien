  function toggleSwitch(element) {

            element.classList.toggle("active");

            let toggles =
                document.querySelectorAll(".toggle");

            let activeList = [];

            for (let toggle of toggles) {

                if (toggle.classList.contains("active")) {

                    activeList.push(toggle);
                }
            }

            if (activeList.length > 2) {

                activeList[0].classList.remove("active");
            }
        }
