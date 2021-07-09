
if (!Cookies.get('popup')) {
setTimeout(function() {
$('#siteModal').modal();
}, 600);
}
$('#siteModal').on('shown.bs.modal', function () {
// bootstrap modal callback function
// set cookie
Cookies.set('popup', 'valid', { expires: 3, path: "/" }); // need to set the path to fix a FF bug
})