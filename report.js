$('.iReport15').closest('td').css('background-color', '#a3b5ff');

criarTotalFarmado();

function criarTotalFarmado() {
        var totalFarmado = 0;
        var totalCapacidade = 0;

        $('.carry').each(function () {
        var valores = $(this).prop('alt').split('/');
        var farmado = parseInt(valores[0]);
        var capacidade = parseInt(valores[1]);

        totalFarmado += farmado;
        totalCapacidade += capacidade;
    });

    var porcentagem = ((totalFarmado / totalCapacidade) * 100).toFixed(2);
    $('#markAll').append('<div style="margin-top: 10px;"><img alt="57/500" src="img/x.gif" class="reportInfo carry half"> <span><label for="sAll2">' + totalFarmado + '/' + totalCapacidade + ' - ' + porcentagem + '% </label></span></div>');
}