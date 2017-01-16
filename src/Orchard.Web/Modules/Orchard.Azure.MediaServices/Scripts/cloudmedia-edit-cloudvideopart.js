/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

/// <reference path="Typings/jquery.d.ts" />
/// <reference path="Typings/jqueryui.d.ts" />
var Orchard;
(function (Orchard) {
    var Azure;
    (function (Azure) {
        var MediaServices;
        (function (MediaServices) {
            var CloudVideoEdit;
            (function (CloudVideoEdit) {
                function hasCorsSupport() {
                    return 'withCredentials' in new XMLHttpRequest();
                }
                $(function () {
                    var corsSupported = hasCorsSupport();
                    if (corsSupported) {
                        CloudVideoEdit.initializeUploadDirect();
                    }
                    else {
                        CloudVideoEdit.initializeUploadProxied();
                    }
                    var localStorage = window["localStorage"];
                    var isCreating = $("#tabs").data("cloudvideo-iscreating");
                    $("#tabs").tabs({
                        activate: function () {
                            if (localStorage && localStorage.setItem)
                                localStorage.setItem("selectedCloudVideoTab", $("#tabs").tabs("option", "active"));
                        },
                        active: !isCreating && localStorage && localStorage.getItem ? localStorage.getItem("selectedCloudVideoTab") : null
                    }).show();
                });
            })(CloudVideoEdit = MediaServices.CloudVideoEdit || (MediaServices.CloudVideoEdit = {}));
        })(MediaServices = Azure.MediaServices || (Azure.MediaServices = {}));
    })(Azure = Orchard.Azure || (Orchard.Azure = {}));
})(Orchard || (Orchard = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3VkbWVkaWEtZWRpdC1jbG91ZHZpZGVvcGFydC5qcyIsImNsb3VkbWVkaWEtZWRpdC1jbG91ZHZpZGVvcGFydC50cyJdLCJuYW1lcyI6WyJPcmNoYXJkIiwiT3JjaGFyZC5BenVyZSIsIk9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcyIsIk9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5DbG91ZFZpZGVvRWRpdCIsIk9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5DbG91ZFZpZGVvRWRpdC5oYXNDb3JzU3VwcG9ydCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFDTEEsNENBQTRDO0FBQzVDLDhDQUE4QztBQUU5QyxJQUFPLE9BQU8sQ0F3QmI7QUF4QkQsV0FBTyxPQUFPO0lBQUNBLElBQUFBLEtBQUtBLENBd0JuQkE7SUF4QmNBLFdBQUFBLEtBQUtBO1FBQUNDLElBQUFBLGFBQWFBLENBd0JqQ0E7UUF4Qm9CQSxXQUFBQSxhQUFhQTtZQUFDQyxJQUFBQSxjQUFjQSxDQXdCaERBO1lBeEJrQ0EsV0FBQUEsY0FBY0EsRUFBQ0EsQ0FBQ0E7Z0JBQy9DQztvQkFDSUMsTUFBTUEsQ0FBQ0EsaUJBQWlCQSxJQUFJQSxJQUFJQSxjQUFjQSxFQUFFQSxDQUFDQTtnQkFDckRBLENBQUNBO2dCQUVERCxDQUFDQSxDQUFDQTtvQkFDRSxJQUFJLGFBQWEsR0FBRyxjQUFjLEVBQUUsQ0FBQztvQkFFckMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDaEIscUNBQXNCLEVBQUUsQ0FBQztvQkFDN0IsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixzQ0FBdUIsRUFBRSxDQUFDO29CQUM5QixDQUFDO29CQUVELElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxVQUFVLEdBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUNuRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNaLFFBQVEsRUFBRTs0QkFDTixFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQztnQ0FDckMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMzRixDQUFDO3dCQUNELE1BQU0sRUFBRSxDQUFDLFVBQVUsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsSUFBSTtxQkFDckgsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNkLENBQUMsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQ0FBQ0EsRUF4QmtDRCxjQUFjQSxHQUFkQSw0QkFBY0EsS0FBZEEsNEJBQWNBLFFBd0JoREE7UUFBREEsQ0FBQ0EsRUF4Qm9CRCxhQUFhQSxHQUFiQSxtQkFBYUEsS0FBYkEsbUJBQWFBLFFBd0JqQ0E7SUFBREEsQ0FBQ0EsRUF4QmNELEtBQUtBLEdBQUxBLGFBQUtBLEtBQUxBLGFBQUtBLFFBd0JuQkE7QUFBREEsQ0FBQ0EsRUF4Qk0sT0FBTyxLQUFQLE9BQU8sUUF3QmIiLCJmaWxlIjoiY2xvdWRtZWRpYS1lZGl0LWNsb3VkdmlkZW9wYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiVHlwaW5ncy9qcXVlcnkuZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiVHlwaW5ncy9qcXVlcnl1aS5kLnRzXCIgLz5cblxubW9kdWxlIE9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5DbG91ZFZpZGVvRWRpdCB7XG4gICAgZnVuY3Rpb24gaGFzQ29yc1N1cHBvcnQoKSB7XG4gICAgICAgIHJldHVybiAnd2l0aENyZWRlbnRpYWxzJyBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9XG5cbiAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29yc1N1cHBvcnRlZCA9IGhhc0NvcnNTdXBwb3J0KCk7XG5cbiAgICAgICAgaWYgKGNvcnNTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIGluaXRpYWxpemVVcGxvYWREaXJlY3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluaXRpYWxpemVVcGxvYWRQcm94aWVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbG9jYWxTdG9yYWdlID0gd2luZG93W1wibG9jYWxTdG9yYWdlXCJdO1xuICAgICAgICB2YXIgaXNDcmVhdGluZzogYm9vbGVhbiA9ICQoXCIjdGFic1wiKS5kYXRhKFwiY2xvdWR2aWRlby1pc2NyZWF0aW5nXCIpO1xuICAgICAgICAkKFwiI3RhYnNcIikudGFicyh7XG4gICAgICAgICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlLnNldEl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2VsZWN0ZWRDbG91ZFZpZGVvVGFiXCIsICQoXCIjdGFic1wiKS50YWJzKFwib3B0aW9uXCIsIFwiYWN0aXZlXCIpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmU6ICFpc0NyZWF0aW5nICYmIGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VsZWN0ZWRDbG91ZFZpZGVvVGFiXCIpIDogbnVsbFxuICAgICAgICB9KS5zaG93KCk7XG4gICAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
