$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.modal').modal();
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 3
    });

    inicializarDados();
});
function dadosProfessor() {
    var professor = {
        nome: $("#nome").val().trim(),
        idade: parseInt($("#idade").val().trim()),
        genero: $("input[name=genero]:checked").val(),
        formacao: $("#formacao").val(),
        areaAtuacao: $("#areaAtuacao").val(),
        disponibilidadeInicio: $("#dataInicio").val(),
        disponibilidadeFim: $("#dataFim").val()
    };
    return professor;
}

$("#salvarBtn").click(function () {
    var professor = dadosProfessor();
    var valido = validar(professor);
    if (valido) {
        adicionarProfessorNaTabela(professor);
        Materialize.toast("Sucesso!", 3000);
        $(".modal").modal("close");
        $("#cadastroProfessor").trigger("reset");
    }
    else {
        Materialize.toast("Preencha os campos obrigatórios", 3000);
    }
});
function validar(professor) {
    // false, 0, "", undefined, null = TUDO FALSO
    if (professor.nome && professor.idade && professor.genero && professor.formacao && professor.areaAtuacao) {
        return true;
    }
    else {
        return false;
    }
}

var contador = 0;

function adicionarProfessorNaTabela(professor) {
    contador++;
    var idValue = "row" + contador;

    $("#corpoTabela").append("<tr>" +
        "<td><input type='radio' name='edicao' id='" + idValue + "' value='" + idValue + "'><label for='" + idValue + "'></label></td>" +
        "<td>" + professor.nome + "</td>" +
        "<td>" + professor.idade + "</td>" +
        "<td>" + professor.genero + "</td>" +
        "<td>" + professor.formacao + "</td>" +
        "<td>" + professor.areaAtuacao + "</td>" +
        "<td>" + professor.disponibilidadeInicio + "</td>" +
        "<td>" + professor.disponibilidadeFim + "</td></tr>");
}

$("#removerBtn").click(function () {
    var selecionado = $("input[name=edicao]:checked");

    if (selecionado.val()) {
        selecionado.parent().parent().remove();
        Materialize.toast("Removido com Sucesso!", 5000);
    }
    else {
        Materialize.toast("Selecione um registro para remover!", 5000);
    }
});

function inicializarDados() {
    var listaProfessores = JSON.parse(dados);
    listaProfessores.forEach(function (professor) {
        adicionarProfessorNaTabela(professor);
    });
}

$("#editarBtn").click(function () {
    var professor = dadosProfessor();
    var selecionado = $("input[name=edicao]:checked");
    // var selec = $("#corpoTabela").children();

    if (selecionado.val()) {
        var selec = selecionado.parent().parent()[0].children;
        professor.nome.val(selec[1]);
        // professor.idade.val(selec[2].textContent),
        // professor.genero.val(selec[3].textContent),
        // professor.formacao.val(selec[4].textContent),
        // professor.areaAtuacao.val(selec[5].textContent),
        // professor.disponibilidadeInicio.val(selec[6].textContent),
        // professor.disponibilidadeFim.val(selec[7].textContent),

        // var professor = {
        //     nome: $("#nome").val(selec[1].textContent),
        //     idade: parseInt($("#idade").val(selec[2].textContent)),
        //     genero: $("input[name=genero]:checked").val(selec[3].textContent),
        //     formacao: $("#formacao").val(selec[4].textContent),
        //     areaAtuacao: $("#areaAtuacao").val(selec[5].textContent),
        //     disponibilidadeInicio: $("#dataInicio").val(selec[6].textContent),
        //     disponibilidadeFim: $("#dataFim").val(selec[7].textContent)
        // };
        $(".modal").modal("open");
        $("#idade, #dataInicio, #dataFim, #nome").focus();
        // Materialize.toast("Editado com Sucesso!",5000);
    }
    else {
        Materialize.toast("Selecione um registro para edição!", 5000);
    }
});