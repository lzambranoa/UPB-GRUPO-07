$(document).ready(function() {
    $('#example').DataTable({

        "ajax":{
            "url": "php/consulta.php",
            "method": "POST"
        },
        "columns":[
            {"data": "tipo de operacion"},
            {"data": "monto"},
            {"data": "categoria"},
            {"data": "fecha"},
            {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>delete</i></button></div></div>"}
        ]
    });
} );
