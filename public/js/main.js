$(document).ready(()=>{
    $('.delete-todo').on('click',(e)=>{
        $target = $(e.target);
        const id = $target.attr('data-id')
        console.log(id)
        $.ajax({
            type:'DELETE',
            url: '/delete/'+id,
            success:(response)=>{
                console.log('Deleting todo');
                window.location='/'
                return false;
            },
            error:(error)=>{
                console.log(error)
            }
        })
    })
})