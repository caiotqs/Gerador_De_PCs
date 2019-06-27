    function rolarDado(nmr) {
        switch (nmr) {
            case 4:
                return rolar1d4();
            case 6:
                return rolar1d6();
            case 8:
                return rolar1d8();
            case 10:
                return rolar1d10();
            case 12:
                return rolar1d12();
            case 20:
                return rolar1d20();

        }

    }

    function rolar1d4() {
        return valorDado1 = Math.floor(Math.random() * (4) + 1);
    }

    function rolar1d6() {
        return valorDado1 = Math.floor(Math.random() * (6) + 1);
    }

    function rolar1d8() {
        return valorDado1 = Math.floor(Math.random() * (8) + 1);
    }

    function rolar1d10() {
        return valorDado1 = Math.floor(Math.random() * (10) + 1);
    }

    function rolar1d12() {
        return valorDado1 = Math.floor(Math.random() * (12) + 1);
    }

    function rolar1d20() {
        return valorDado1 = Math.floor(Math.random() * (20) + 1);
    }