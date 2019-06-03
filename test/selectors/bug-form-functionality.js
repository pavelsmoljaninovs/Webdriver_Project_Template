export default {
    newBug: '#new_bug',
    severity: '#severity',
    severityList: ['Minor', 'Major', 'Critical'],
    severityButton: '.Dropdown-option', 
    severityButtonOpen: 'div.Dropdown-menu', 
    priority: '#priority',
    priorityButtonOpen: 'div.Dropdown-menu',
    repro: '#repro',
    reproButtonOpen: 'div.Dropdown-menu',
    assignee: '#assignee',
    assigneeButtonOpen: 'div.Dropdown-menu',
    versionField: '#version',

    summaryField: '#summary',
    stepsField: '#str',
    actualResult: '#actual',
    expectedResult: '#expected',
    arrayFields: function() {
      return [this.summaryField, this.stepsField, this.actualResult, this.expectedResult];
    },
    arrayDropDown: function() {
      return [this.severity, this.priority, this.assignee, this.repro];
    },
    clear: '#clear',

    submit: '#submit',
    openButton: '#badge',
    allIssues: '#all_issues',
    
    bugSummary: '#summary_1', 
    bugPriority: '#priority_1',
    bugStatus: '#status_1',
    bugAssignee: '#assignee_1'
  }
