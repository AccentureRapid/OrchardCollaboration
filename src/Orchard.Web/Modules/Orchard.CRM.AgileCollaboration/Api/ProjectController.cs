﻿using Newtonsoft.Json;
using Orchard.ContentManagement;
using Orchard.ContentManagement.MetaData.Models;
using Orchard.Localization;
using Orchard.Logging;
using Orchard.Security;
using Orchard.CRM.AgileCollaboration.Common;
using Orchard.CRM.AgileCollaboration.Services;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Orchard.Users.Events;
using Orchard.CRM.Core.Services;
using Orchard.CRM.Core.Models;
using Orchard.Core.Common.Models;
using Orchard.CRM.Core.ViewModels;
using Orchard.UI.Navigation;
using Orchard.Settings;
using Orchard.CRM.Core;
using System.Globalization;
using Orchard.Core.Title.Models;
using Orchard.Users.Models;
using System.Dynamic;
using Orchard.CRM.Project.Services;
using Orchard.Core.Settings.Models;
using Orchard.CRM.Project.Models;

namespace Orchard.CRM.AgileCollaboration.Api
{

    public class ProjectController : ApiController
    {
        
        private static readonly char[] separator = new[] { '{', '}', ',' };
        private readonly IContentManager _contentManager;
        private readonly IContentTypesService _contentTypesService;
        private readonly IHtmlModuleService _moduleService;
        private readonly IUserEventHandler _userEventHandler;
        private readonly IMembershipService _membershipService;
        private readonly IProjectService _projectService;
        private readonly IAgileCollaborationService _agileCollaborationService;
        private readonly ICRMContentOwnershipService _crmContentOwnershipService;
        private readonly IBasicDataService _basicDataService;
        private readonly ISiteService _siteService;
        private readonly ISearchTicketService _searchTicketService;
        private readonly IBusinessUnitService _businessUnitService;
        private readonly IExtendedProjectService _extendedProjectService;
        private readonly IFolderService _folderService;

        public ProjectController(
            IContentManager contentManager,
            IContentTypesService contentTypesService,
            IHtmlModuleService moduleService,
            IUserEventHandler userEventHandler,
            IMembershipService membershipService,
            IProjectService projectService,
            IOrchardServices _services,
            IAgileCollaborationService agileCollaborationService,
            ICRMContentOwnershipService crmContentOwnershipService,
            IBasicDataService basicDataService,
            ISiteService siteService,
            ISearchTicketService searchTicketService,
            IBusinessUnitService businessUnitService,
            IExtendedProjectService extendedProjectService,
            IFolderService folderService
            )
        {
            _contentManager = contentManager;
            _contentTypesService = contentTypesService;
            _moduleService = moduleService;
            _userEventHandler = userEventHandler;
            _membershipService = membershipService;
            _projectService = projectService;
            Services = _services;
            _agileCollaborationService = agileCollaborationService;
            _crmContentOwnershipService = crmContentOwnershipService;
            _basicDataService = basicDataService;
            _siteService = siteService;
            _searchTicketService = searchTicketService;
            _businessUnitService = businessUnitService;
            _extendedProjectService = extendedProjectService;
            _folderService = folderService;

            Logger = NullLogger.Instance;
            T = NullLocalizer.Instance;
        }

        public ILogger Logger { get; set; }
        public Localizer T { get; set; }

        public IOrchardServices Services { get; set; }

        /// <summary>
        /// GET api/Project/GetProject?projectId=110
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public HttpResponseMessage GetProject(int projectId)
        {
            HttpResponseMessage response = new HttpResponseMessage();
            try
            {
                var project = _projectService.GetProject(projectId);
                var result = new {
                    project.Id,
                    project.Title,
                    project.Description
                };
                response.Content = Utilities.Serialize(result, response);
            }
            catch (Exception ex)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                Logger.Error("Error occurs when GetProject :" + ex.StackTrace);
            }
            return response;
        }

        /// <summary>
        /// GET api/Project/GetProjectWiki?projectId=110
        /// </summary>
        /// <returns></returns>
        [Obsolete("It seems for wiki related, client only need folders and items attched to current folder.")]
        [HttpGet]
        public HttpResponseMessage GetProjectWiki(int projectId)
        {
            HttpResponseMessage response = new HttpResponseMessage();
            try
            {
                var result = _extendedProjectService.GetProjectWiki(projectId);
                response.Content = Utilities.Serialize(result, response);
            }
            catch (Exception ex)
            {
                response.StatusCode = System.Net.HttpStatusCode.InternalServerError;
                Logger.Error("Error occurs when GetProjectWiki :" + ex.StackTrace);
            }
            return response;
        }
    }
}
