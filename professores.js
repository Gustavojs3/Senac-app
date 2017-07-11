$(document).ready(function () {
      $(".button-collapse").sideNav();
      $('.modal').modal();
      $('select').material_select();
      $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 3
      });
    });

$("#salvarBtn").click(function(){
    var professor = {
        nome: $("#nome").val().trim(),
        idade: parseInt($("#idade").val()),
        genero: $("input[name=genero]:checked").val(),
        formacao: $("#formacao").val(),
        areaAtuacao: $("#areaAtuacao").val(),
        disponibilidadeInicio: $("#dataInicio").val(),
        disponibilidadeFim: $("#dataFim").val()
    };
    var valido = validar(professor);
    if (valido) {
        
    }
    else {
        
    }
});
function validar(professor) {
    // false, 0, "",undefined, null = TUDO FALSO
    if (professor.nome && professor.idade && professor.genero && professor.formacao && professor.areaAtuacao) {
        return true;
    }
    else {
        return false;
    }
}