const load_downloads = () => {
    $.ajax({
        url: url + 'dashboard_map_downloads.php',
        type: 'POST',
        dataType: 'json',
        data: { branchid: data.branchid },
        success: function(response) {
            if (response.Data != null) {
                $('#totalApps').html(parseInt(response.Data[0].Total).toLocaleString());
                $('#totalDownload').html(parseInt(response.Data[0].downloads).toLocaleString());
                $('#totalAnimals').html(parseInt(response.Data[0].animalCount).toLocaleString());
                $('#taggedAnimal').html(parseInt(response.Data[0].tagged).toLocaleString());
                $('#totalFarmers').html(parseInt(response.Data[0].farmercount).toLocaleString());
                $('#vdmarked').html(parseInt(response.Data[0].vd).toLocaleString());
                $('#revenue').html(parseInt(response.Data[0].revenue).toLocaleString());
                $('#mobiles').html(parseInt(response.Data[0].mobiles).toLocaleString());
            }
        }
    });
}
const load_operations = () => {
    $.ajax({
        url: url + 'dashboard_map_operations.php',
        type: 'POST',
        dataType: 'json',
        data: { branchid: data.branchid },
        success: function(response) {
            if (response.Data != null) {
                $('#deworming').html(parseInt(response.Data[0].deworming).toLocaleString());
                $('#vaccinations').html(parseInt(response.Data[0].vaccination).toLocaleString());
                $('#castration').html(parseInt(response.Data[0].castration).toLocaleString());
                $('#ipd').html(parseInt(response.Data[0].IPD).toLocaleString());
                // $('#operations').html(parseInt(response.Data[0].operations).toLocaleString());
                $('#caseshandled').html(parseInt(response.Data[0].cases).toLocaleString());
                // $('#casepaper').html(parseInt(response.Data[0].cases).toLocaleString());
            }
        }
    });
}
load_downloads();
load_operations();