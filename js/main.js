var rellax = new Rellax('.rellax');

jQuery(document).ready(function ($) {

    // Header fixed and Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#nav').addClass('scrolled');
        } else {
            $('#nav').removeClass('scrolled');
        }
    });

    // Set GitHub version
    GetLatestReleaseVersion(); 

});

function GetLatestReleaseVersion() {
    // RemoteLight
    $.getJSON("https://api.github.com/repos/drumber/remotelight/releases").done(function (json) {
         var release = json[0];
         var versionTag = release.tag_name;
         $("#remotelight-version").text(versionTag);
    });
    // RemoteLightServer
    $.getJSON("https://api.github.com/repos/drumber/remotelightserver/releases").done(function (json) {
         var release = json[0];
         var versionTag = release.tag_name;
         $("#remotelightserver-version").text(versionTag);
    });
    // RemoteLightWeb
    $.getJSON("https://api.github.com/repos/drumber/remotelightweb/releases").done(function (json) {
         var release = json[0];
         var versionTag = release.tag_name;
         $("#remotelightweb-version").text(versionTag);
    });
}