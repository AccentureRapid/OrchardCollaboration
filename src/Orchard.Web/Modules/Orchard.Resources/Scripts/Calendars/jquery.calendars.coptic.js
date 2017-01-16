/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

/* http://keith-wood.name/calendars.html
   Coptic calendar for jQuery v2.0.1.
   Written by Keith Wood (kbwood{at}iinet.com.au) February 2010.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */

(function($) { // Hide scope, no $ conflict

	/** Implementation of the Coptic calendar.
		See <a href="http://en.wikipedia.org/wiki/Coptic_calendar">http://en.wikipedia.org/wiki/Coptic_calendar</a>.
		See also Calendrical Calculations: The Millennium Edition
		(<a href="http://emr.cs.iit.edu/home/reingold/calendar-book/index.shtml">http://emr.cs.iit.edu/home/reingold/calendar-book/index.shtml</a>).
		@class CopticCalendar
		@param [language=''] {string} The language code (default English) for localisation. */
	function CopticCalendar(language) {
		this.local = this.regionalOptions[language || ''] || this.regionalOptions[''];
	}

	CopticCalendar.prototype = new $.calendars.baseCalendar;

	$.extend(CopticCalendar.prototype, {
		/** The calendar name.
			@memberof CopticCalendar */
		name: 'Coptic',
		/** Julian date of start of Coptic epoch: 29 August 284 CE (Gregorian).
			@memberof CopticCalendar */
		jdEpoch: 1825029.5,
		/** Days per month in a common year.
			@memberof CopticCalendar */
		daysPerMonth: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 5],
		/** <code>true</code> if has a year zero, <code>false</code> if not.
			@memberof CopticCalendar */
		hasYearZero: false,
		/** The minimum month number.
			@memberof CopticCalendar */
		minMonth: 1,
		/** The first month in the year.
			@memberof CopticCalendar */
		firstMonth: 1,
		/** The minimum day number.
			@memberof CopticCalendar */
		minDay: 1,

		/** Localisations for the plugin.
			Entries are objects indexed by the language code ('' being the default US/English).
			Each object has the following attributes.
			@memberof CopticCalendar
			@property name {string} The calendar name.
			@property epochs {string[]} The epoch names.
			@property monthNames {string[]} The long names of the months of the year.
			@property monthNamesShort {string[]} The short names of the months of the year.
			@property dayNames {string[]} The long names of the days of the week.
			@property dayNamesShort {string[]} The short names of the days of the week.
			@property dayNamesMin {string[]} The minimal names of the days of the week.
			@property dateFormat {string} The date format for this calendar.
					See the options on <a href="BaseCalendar.html#formatDate"><code>formatDate</code></a> for details.
			@property firstDay {number} The number of the first day of the week, starting at 0.
			@property isRTL {number} <code>true</code> if this localisation reads right-to-left. */
		regionalOptions: { // Localisations
			'': {
				name: 'Coptic',
				epochs: ['BAM', 'AM'],
				monthNames: ['Thout', 'Paopi', 'Hathor', 'Koiak', 'Tobi', 'Meshir',
				'Paremhat', 'Paremoude', 'Pashons', 'Paoni', 'Epip', 'Mesori', 'Pi Kogi Enavot'],
				monthNamesShort: ['Tho', 'Pao', 'Hath', 'Koi', 'Tob', 'Mesh',
				'Pat', 'Pad', 'Pash', 'Pao', 'Epi', 'Meso', 'PiK'],
				dayNames: ['Tkyriaka', 'Pesnau', 'Pshoment', 'Peftoou', 'Ptiou', 'Psoou', 'Psabbaton'],
				dayNamesShort: ['Tky', 'Pes', 'Psh', 'Pef', 'Pti', 'Pso', 'Psa'],
				dayNamesMin: ['Tk', 'Pes', 'Psh', 'Pef', 'Pt', 'Pso', 'Psa'],
				dateFormat: 'dd/mm/yyyy',
				firstDay: 0,
				isRTL: false
			}
		},

		/** Determine whether this date is in a leap year.
			@memberof CopticCalendar
			@param year {CDate|number} The date to examine or the year to examine.
			@return {boolean} <code>true</code> if this is a leap year, <code>false</code> if not.
			@throws Error if an invalid year or a different calendar used. */
		leapYear: function(year) {
			var date = this._validate(year, this.minMonth, this.minDay, $.calendars.local.invalidYear);
			var year = date.year() + (date.year() < 0 ? 1 : 0); // No year zero
			return year % 4 === 3 || year % 4 === -1;
		},

		/** Retrieve the number of months in a year.
			@memberof CopticCalendar
			@param year {CDate|number} The date to examine or the year to examine.
			@return {number} The number of months.
			@throws Error if an invalid year or a different calendar used. */
		monthsInYear: function(year) {
			this._validate(year, this.minMonth, this.minDay,
				$.calendars.local.invalidYear || $.calendars.regionalOptions[''].invalidYear);
			return 13;
		},

		/** Determine the week of the year for a date.
			@memberof CopticCalendar
			@param year {CDate|number} The date to examine or the year to examine.
			@param [month] {number) the month to examine.
			@param [day] {number} The day to examine.
			@return {number} The week of the year.
			@throws Error if an invalid date or a different calendar used. */
		weekOfYear: function(year, month, day) {
			// Find Sunday of this week starting on Sunday
			var checkDate = this.newDate(year, month, day);
			checkDate.add(-checkDate.dayOfWeek(), 'd');
			return Math.floor((checkDate.dayOfYear() - 1) / 7) + 1;
		},

		/** Retrieve the number of days in a month.
			@memberof CopticCalendar
			@param year {CDate|number} The date to examine or the year of the month.
			@param [month] {number} The month.
			@return {number} The number of days in this month.
			@throws Error if an invalid month/year or a different calendar used. */
		daysInMonth: function(year, month) {
			var date = this._validate(year, month, this.minDay, $.calendars.local.invalidMonth);
			return this.daysPerMonth[date.month() - 1] +
				(date.month() === 13 && this.leapYear(date.year()) ? 1 : 0);
		},

		/** Determine whether this date is a week day.
			@memberof CopticCalendar
			@param year {CDate|number} The date to examine or the year to examine.
			@param month {number} The month to examine.
			@param day {number} The day to examine.
			@return {boolean} <code>true</code> if a week day, <code>false</code> if not.
			@throws Error if an invalid date or a different calendar used. */
		weekDay: function(year, month, day) {
			return (this.dayOfWeek(year, month, day) || 7) < 6;
		},

		/** Retrieve the Julian date equivalent for this date,
			i.e. days since January 1, 4713 BCE Greenwich noon.
			@memberof CopticCalendar
			@param year {CDate|number} The date to convert or the year to convert.
			@param [month] {number) the month to convert.
			@param [day] {number} The day to convert.
			@return {number} The equivalent Julian date.
			@throws Error if an invalid date or a different calendar used. */
		toJD: function(year, month, day) {
			var date = this._validate(year, month, day, $.calendars.local.invalidDate);
			year = date.year();
			if (year < 0) { year++; } // No year zero
			return date.day() + (date.month() - 1) * 30 +
				(year - 1) * 365 + Math.floor(year / 4) + this.jdEpoch - 1;
		},

		/** Create a new date from a Julian date.
			@memberof CopticCalendar
			@param jd {number} The Julian date to convert.
			@return {CDate} The equivalent date. */
		fromJD: function(jd) {
			var c = Math.floor(jd) + 0.5 - this.jdEpoch;
			var year = Math.floor((c - Math.floor((c + 366) / 1461)) / 365) + 1;
			if (year <= 0) { year--; } // No year zero
			c = Math.floor(jd) + 0.5 - this.newDate(year, 1, 1).toJD();
			var month = Math.floor(c / 30) + 1;
			var day = c - (month - 1) * 30 + 1;
			return this.newDate(year, month, day);
		}
	});

	// Coptic calendar implementation
	$.calendars.calendars.coptic = CopticCalendar;

})(jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5jYWxlbmRhcnMuY29wdGljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpxdWVyeS5jYWxlbmRhcnMuY29wdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaHR0cDovL2tlaXRoLXdvb2QubmFtZS9jYWxlbmRhcnMuaHRtbFxuICAgQ29wdGljIGNhbGVuZGFyIGZvciBqUXVlcnkgdjIuMC4xLlxuICAgV3JpdHRlbiBieSBLZWl0aCBXb29kIChrYndvb2R7YXR9aWluZXQuY29tLmF1KSBGZWJydWFyeSAyMDEwLlxuICAgQXZhaWxhYmxlIHVuZGVyIHRoZSBNSVQgKGh0dHA6Ly9rZWl0aC13b29kLm5hbWUvbGljZW5jZS5odG1sKSBsaWNlbnNlLiBcbiAgIFBsZWFzZSBhdHRyaWJ1dGUgdGhlIGF1dGhvciBpZiB5b3UgdXNlIGl0LiAqL1xuXG4oZnVuY3Rpb24oJCkgeyAvLyBIaWRlIHNjb3BlLCBubyAkIGNvbmZsaWN0XG5cblx0LyoqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBDb3B0aWMgY2FsZW5kYXIuXG5cdFx0U2VlIDxhIGhyZWY9XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvcHRpY19jYWxlbmRhclwiPmh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29wdGljX2NhbGVuZGFyPC9hPi5cblx0XHRTZWUgYWxzbyBDYWxlbmRyaWNhbCBDYWxjdWxhdGlvbnM6IFRoZSBNaWxsZW5uaXVtIEVkaXRpb25cblx0XHQoPGEgaHJlZj1cImh0dHA6Ly9lbXIuY3MuaWl0LmVkdS9ob21lL3JlaW5nb2xkL2NhbGVuZGFyLWJvb2svaW5kZXguc2h0bWxcIj5odHRwOi8vZW1yLmNzLmlpdC5lZHUvaG9tZS9yZWluZ29sZC9jYWxlbmRhci1ib29rL2luZGV4LnNodG1sPC9hPikuXG5cdFx0QGNsYXNzIENvcHRpY0NhbGVuZGFyXG5cdFx0QHBhcmFtIFtsYW5ndWFnZT0nJ10ge3N0cmluZ30gVGhlIGxhbmd1YWdlIGNvZGUgKGRlZmF1bHQgRW5nbGlzaCkgZm9yIGxvY2FsaXNhdGlvbi4gKi9cblx0ZnVuY3Rpb24gQ29wdGljQ2FsZW5kYXIobGFuZ3VhZ2UpIHtcblx0XHR0aGlzLmxvY2FsID0gdGhpcy5yZWdpb25hbE9wdGlvbnNbbGFuZ3VhZ2UgfHwgJyddIHx8IHRoaXMucmVnaW9uYWxPcHRpb25zWycnXTtcblx0fVxuXG5cdENvcHRpY0NhbGVuZGFyLnByb3RvdHlwZSA9IG5ldyAkLmNhbGVuZGFycy5iYXNlQ2FsZW5kYXI7XG5cblx0JC5leHRlbmQoQ29wdGljQ2FsZW5kYXIucHJvdG90eXBlLCB7XG5cdFx0LyoqIFRoZSBjYWxlbmRhciBuYW1lLlxuXHRcdFx0QG1lbWJlcm9mIENvcHRpY0NhbGVuZGFyICovXG5cdFx0bmFtZTogJ0NvcHRpYycsXG5cdFx0LyoqIEp1bGlhbiBkYXRlIG9mIHN0YXJ0IG9mIENvcHRpYyBlcG9jaDogMjkgQXVndXN0IDI4NCBDRSAoR3JlZ29yaWFuKS5cblx0XHRcdEBtZW1iZXJvZiBDb3B0aWNDYWxlbmRhciAqL1xuXHRcdGpkRXBvY2g6IDE4MjUwMjkuNSxcblx0XHQvKiogRGF5cyBwZXIgbW9udGggaW4gYSBjb21tb24geWVhci5cblx0XHRcdEBtZW1iZXJvZiBDb3B0aWNDYWxlbmRhciAqL1xuXHRcdGRheXNQZXJNb250aDogWzMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDVdLFxuXHRcdC8qKiA8Y29kZT50cnVlPC9jb2RlPiBpZiBoYXMgYSB5ZWFyIHplcm8sIDxjb2RlPmZhbHNlPC9jb2RlPiBpZiBub3QuXG5cdFx0XHRAbWVtYmVyb2YgQ29wdGljQ2FsZW5kYXIgKi9cblx0XHRoYXNZZWFyWmVybzogZmFsc2UsXG5cdFx0LyoqIFRoZSBtaW5pbXVtIG1vbnRoIG51bWJlci5cblx0XHRcdEBtZW1iZXJvZiBDb3B0aWNDYWxlbmRhciAqL1xuXHRcdG1pbk1vbnRoOiAxLFxuXHRcdC8qKiBUaGUgZmlyc3QgbW9udGggaW4gdGhlIHllYXIuXG5cdFx0XHRAbWVtYmVyb2YgQ29wdGljQ2FsZW5kYXIgKi9cblx0XHRmaXJzdE1vbnRoOiAxLFxuXHRcdC8qKiBUaGUgbWluaW11bSBkYXkgbnVtYmVyLlxuXHRcdFx0QG1lbWJlcm9mIENvcHRpY0NhbGVuZGFyICovXG5cdFx0bWluRGF5OiAxLFxuXG5cdFx0LyoqIExvY2FsaXNhdGlvbnMgZm9yIHRoZSBwbHVnaW4uXG5cdFx0XHRFbnRyaWVzIGFyZSBvYmplY3RzIGluZGV4ZWQgYnkgdGhlIGxhbmd1YWdlIGNvZGUgKCcnIGJlaW5nIHRoZSBkZWZhdWx0IFVTL0VuZ2xpc2gpLlxuXHRcdFx0RWFjaCBvYmplY3QgaGFzIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlcy5cblx0XHRcdEBtZW1iZXJvZiBDb3B0aWNDYWxlbmRhclxuXHRcdFx0QHByb3BlcnR5IG5hbWUge3N0cmluZ30gVGhlIGNhbGVuZGFyIG5hbWUuXG5cdFx0XHRAcHJvcGVydHkgZXBvY2hzIHtzdHJpbmdbXX0gVGhlIGVwb2NoIG5hbWVzLlxuXHRcdFx0QHByb3BlcnR5IG1vbnRoTmFtZXMge3N0cmluZ1tdfSBUaGUgbG9uZyBuYW1lcyBvZiB0aGUgbW9udGhzIG9mIHRoZSB5ZWFyLlxuXHRcdFx0QHByb3BlcnR5IG1vbnRoTmFtZXNTaG9ydCB7c3RyaW5nW119IFRoZSBzaG9ydCBuYW1lcyBvZiB0aGUgbW9udGhzIG9mIHRoZSB5ZWFyLlxuXHRcdFx0QHByb3BlcnR5IGRheU5hbWVzIHtzdHJpbmdbXX0gVGhlIGxvbmcgbmFtZXMgb2YgdGhlIGRheXMgb2YgdGhlIHdlZWsuXG5cdFx0XHRAcHJvcGVydHkgZGF5TmFtZXNTaG9ydCB7c3RyaW5nW119IFRoZSBzaG9ydCBuYW1lcyBvZiB0aGUgZGF5cyBvZiB0aGUgd2Vlay5cblx0XHRcdEBwcm9wZXJ0eSBkYXlOYW1lc01pbiB7c3RyaW5nW119IFRoZSBtaW5pbWFsIG5hbWVzIG9mIHRoZSBkYXlzIG9mIHRoZSB3ZWVrLlxuXHRcdFx0QHByb3BlcnR5IGRhdGVGb3JtYXQge3N0cmluZ30gVGhlIGRhdGUgZm9ybWF0IGZvciB0aGlzIGNhbGVuZGFyLlxuXHRcdFx0XHRcdFNlZSB0aGUgb3B0aW9ucyBvbiA8YSBocmVmPVwiQmFzZUNhbGVuZGFyLmh0bWwjZm9ybWF0RGF0ZVwiPjxjb2RlPmZvcm1hdERhdGU8L2NvZGU+PC9hPiBmb3IgZGV0YWlscy5cblx0XHRcdEBwcm9wZXJ0eSBmaXJzdERheSB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssIHN0YXJ0aW5nIGF0IDAuXG5cdFx0XHRAcHJvcGVydHkgaXNSVEwge251bWJlcn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhpcyBsb2NhbGlzYXRpb24gcmVhZHMgcmlnaHQtdG8tbGVmdC4gKi9cblx0XHRyZWdpb25hbE9wdGlvbnM6IHsgLy8gTG9jYWxpc2F0aW9uc1xuXHRcdFx0Jyc6IHtcblx0XHRcdFx0bmFtZTogJ0NvcHRpYycsXG5cdFx0XHRcdGVwb2NoczogWydCQU0nLCAnQU0nXSxcblx0XHRcdFx0bW9udGhOYW1lczogWydUaG91dCcsICdQYW9waScsICdIYXRob3InLCAnS29pYWsnLCAnVG9iaScsICdNZXNoaXInLFxuXHRcdFx0XHQnUGFyZW1oYXQnLCAnUGFyZW1vdWRlJywgJ1Bhc2hvbnMnLCAnUGFvbmknLCAnRXBpcCcsICdNZXNvcmknLCAnUGkgS29naSBFbmF2b3QnXSxcblx0XHRcdFx0bW9udGhOYW1lc1Nob3J0OiBbJ1RobycsICdQYW8nLCAnSGF0aCcsICdLb2knLCAnVG9iJywgJ01lc2gnLFxuXHRcdFx0XHQnUGF0JywgJ1BhZCcsICdQYXNoJywgJ1BhbycsICdFcGknLCAnTWVzbycsICdQaUsnXSxcblx0XHRcdFx0ZGF5TmFtZXM6IFsnVGt5cmlha2EnLCAnUGVzbmF1JywgJ1BzaG9tZW50JywgJ1BlZnRvb3UnLCAnUHRpb3UnLCAnUHNvb3UnLCAnUHNhYmJhdG9uJ10sXG5cdFx0XHRcdGRheU5hbWVzU2hvcnQ6IFsnVGt5JywgJ1BlcycsICdQc2gnLCAnUGVmJywgJ1B0aScsICdQc28nLCAnUHNhJ10sXG5cdFx0XHRcdGRheU5hbWVzTWluOiBbJ1RrJywgJ1BlcycsICdQc2gnLCAnUGVmJywgJ1B0JywgJ1BzbycsICdQc2EnXSxcblx0XHRcdFx0ZGF0ZUZvcm1hdDogJ2RkL21tL3l5eXknLFxuXHRcdFx0XHRmaXJzdERheTogMCxcblx0XHRcdFx0aXNSVEw6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKiBEZXRlcm1pbmUgd2hldGhlciB0aGlzIGRhdGUgaXMgaW4gYSBsZWFwIHllYXIuXG5cdFx0XHRAbWVtYmVyb2YgQ29wdGljQ2FsZW5kYXJcblx0XHRcdEBwYXJhbSB5ZWFyIHtDRGF0ZXxudW1iZXJ9IFRoZSBkYXRlIHRvIGV4YW1pbmUgb3IgdGhlIHllYXIgdG8gZXhhbWluZS5cblx0XHRcdEByZXR1cm4ge2Jvb2xlYW59IDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoaXMgaXMgYSBsZWFwIHllYXIsIDxjb2RlPmZhbHNlPC9jb2RlPiBpZiBub3QuXG5cdFx0XHRAdGhyb3dzIEVycm9yIGlmIGFuIGludmFsaWQgeWVhciBvciBhIGRpZmZlcmVudCBjYWxlbmRhciB1c2VkLiAqL1xuXHRcdGxlYXBZZWFyOiBmdW5jdGlvbih5ZWFyKSB7XG5cdFx0XHR2YXIgZGF0ZSA9IHRoaXMuX3ZhbGlkYXRlKHllYXIsIHRoaXMubWluTW9udGgsIHRoaXMubWluRGF5LCAkLmNhbGVuZGFycy5sb2NhbC5pbnZhbGlkWWVhcik7XG5cdFx0XHR2YXIgeWVhciA9IGRhdGUueWVhcigpICsgKGRhdGUueWVhcigpIDwgMCA/IDEgOiAwKTsgLy8gTm8geWVhciB6ZXJvXG5cdFx0XHRyZXR1cm4geWVhciAlIDQgPT09IDMgfHwgeWVhciAlIDQgPT09IC0xO1xuXHRcdH0sXG5cblx0XHQvKiogUmV0cmlldmUgdGhlIG51bWJlciBvZiBtb250aHMgaW4gYSB5ZWFyLlxuXHRcdFx0QG1lbWJlcm9mIENvcHRpY0NhbGVuZGFyXG5cdFx0XHRAcGFyYW0geWVhciB7Q0RhdGV8bnVtYmVyfSBUaGUgZGF0ZSB0byBleGFtaW5lIG9yIHRoZSB5ZWFyIHRvIGV4YW1pbmUuXG5cdFx0XHRAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgbW9udGhzLlxuXHRcdFx0QHRocm93cyBFcnJvciBpZiBhbiBpbnZhbGlkIHllYXIgb3IgYSBkaWZmZXJlbnQgY2FsZW5kYXIgdXNlZC4gKi9cblx0XHRtb250aHNJblllYXI6IGZ1bmN0aW9uKHllYXIpIHtcblx0XHRcdHRoaXMuX3ZhbGlkYXRlKHllYXIsIHRoaXMubWluTW9udGgsIHRoaXMubWluRGF5LFxuXHRcdFx0XHQkLmNhbGVuZGFycy5sb2NhbC5pbnZhbGlkWWVhciB8fCAkLmNhbGVuZGFycy5yZWdpb25hbE9wdGlvbnNbJyddLmludmFsaWRZZWFyKTtcblx0XHRcdHJldHVybiAxMztcblx0XHR9LFxuXG5cdFx0LyoqIERldGVybWluZSB0aGUgd2VlayBvZiB0aGUgeWVhciBmb3IgYSBkYXRlLlxuXHRcdFx0QG1lbWJlcm9mIENvcHRpY0NhbGVuZGFyXG5cdFx0XHRAcGFyYW0geWVhciB7Q0RhdGV8bnVtYmVyfSBUaGUgZGF0ZSB0byBleGFtaW5lIG9yIHRoZSB5ZWFyIHRvIGV4YW1pbmUuXG5cdFx0XHRAcGFyYW0gW21vbnRoXSB7bnVtYmVyKSB0aGUgbW9udGggdG8gZXhhbWluZS5cblx0XHRcdEBwYXJhbSBbZGF5XSB7bnVtYmVyfSBUaGUgZGF5IHRvIGV4YW1pbmUuXG5cdFx0XHRAcmV0dXJuIHtudW1iZXJ9IFRoZSB3ZWVrIG9mIHRoZSB5ZWFyLlxuXHRcdFx0QHRocm93cyBFcnJvciBpZiBhbiBpbnZhbGlkIGRhdGUgb3IgYSBkaWZmZXJlbnQgY2FsZW5kYXIgdXNlZC4gKi9cblx0XHR3ZWVrT2ZZZWFyOiBmdW5jdGlvbih5ZWFyLCBtb250aCwgZGF5KSB7XG5cdFx0XHQvLyBGaW5kIFN1bmRheSBvZiB0aGlzIHdlZWsgc3RhcnRpbmcgb24gU3VuZGF5XG5cdFx0XHR2YXIgY2hlY2tEYXRlID0gdGhpcy5uZXdEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuXHRcdFx0Y2hlY2tEYXRlLmFkZCgtY2hlY2tEYXRlLmRheU9mV2VlaygpLCAnZCcpO1xuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoKGNoZWNrRGF0ZS5kYXlPZlllYXIoKSAtIDEpIC8gNykgKyAxO1xuXHRcdH0sXG5cblx0XHQvKiogUmV0cmlldmUgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGguXG5cdFx0XHRAbWVtYmVyb2YgQ29wdGljQ2FsZW5kYXJcblx0XHRcdEBwYXJhbSB5ZWFyIHtDRGF0ZXxudW1iZXJ9IFRoZSBkYXRlIHRvIGV4YW1pbmUgb3IgdGhlIHllYXIgb2YgdGhlIG1vbnRoLlxuXHRcdFx0QHBhcmFtIFttb250aF0ge251bWJlcn0gVGhlIG1vbnRoLlxuXHRcdFx0QHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBtb250aC5cblx0XHRcdEB0aHJvd3MgRXJyb3IgaWYgYW4gaW52YWxpZCBtb250aC95ZWFyIG9yIGEgZGlmZmVyZW50IGNhbGVuZGFyIHVzZWQuICovXG5cdFx0ZGF5c0luTW9udGg6IGZ1bmN0aW9uKHllYXIsIG1vbnRoKSB7XG5cdFx0XHR2YXIgZGF0ZSA9IHRoaXMuX3ZhbGlkYXRlKHllYXIsIG1vbnRoLCB0aGlzLm1pbkRheSwgJC5jYWxlbmRhcnMubG9jYWwuaW52YWxpZE1vbnRoKTtcblx0XHRcdHJldHVybiB0aGlzLmRheXNQZXJNb250aFtkYXRlLm1vbnRoKCkgLSAxXSArXG5cdFx0XHRcdChkYXRlLm1vbnRoKCkgPT09IDEzICYmIHRoaXMubGVhcFllYXIoZGF0ZS55ZWFyKCkpID8gMSA6IDApO1xuXHRcdH0sXG5cblx0XHQvKiogRGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBkYXRlIGlzIGEgd2VlayBkYXkuXG5cdFx0XHRAbWVtYmVyb2YgQ29wdGljQ2FsZW5kYXJcblx0XHRcdEBwYXJhbSB5ZWFyIHtDRGF0ZXxudW1iZXJ9IFRoZSBkYXRlIHRvIGV4YW1pbmUgb3IgdGhlIHllYXIgdG8gZXhhbWluZS5cblx0XHRcdEBwYXJhbSBtb250aCB7bnVtYmVyfSBUaGUgbW9udGggdG8gZXhhbWluZS5cblx0XHRcdEBwYXJhbSBkYXkge251bWJlcn0gVGhlIGRheSB0byBleGFtaW5lLlxuXHRcdFx0QHJldHVybiB7Ym9vbGVhbn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgYSB3ZWVrIGRheSwgPGNvZGU+ZmFsc2U8L2NvZGU+IGlmIG5vdC5cblx0XHRcdEB0aHJvd3MgRXJyb3IgaWYgYW4gaW52YWxpZCBkYXRlIG9yIGEgZGlmZmVyZW50IGNhbGVuZGFyIHVzZWQuICovXG5cdFx0d2Vla0RheTogZnVuY3Rpb24oeWVhciwgbW9udGgsIGRheSkge1xuXHRcdFx0cmV0dXJuICh0aGlzLmRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KSB8fCA3KSA8IDY7XG5cdFx0fSxcblxuXHRcdC8qKiBSZXRyaWV2ZSB0aGUgSnVsaWFuIGRhdGUgZXF1aXZhbGVudCBmb3IgdGhpcyBkYXRlLFxuXHRcdFx0aS5lLiBkYXlzIHNpbmNlIEphbnVhcnkgMSwgNDcxMyBCQ0UgR3JlZW53aWNoIG5vb24uXG5cdFx0XHRAbWVtYmVyb2YgQ29wdGljQ2FsZW5kYXJcblx0XHRcdEBwYXJhbSB5ZWFyIHtDRGF0ZXxudW1iZXJ9IFRoZSBkYXRlIHRvIGNvbnZlcnQgb3IgdGhlIHllYXIgdG8gY29udmVydC5cblx0XHRcdEBwYXJhbSBbbW9udGhdIHtudW1iZXIpIHRoZSBtb250aCB0byBjb252ZXJ0LlxuXHRcdFx0QHBhcmFtIFtkYXldIHtudW1iZXJ9IFRoZSBkYXkgdG8gY29udmVydC5cblx0XHRcdEByZXR1cm4ge251bWJlcn0gVGhlIGVxdWl2YWxlbnQgSnVsaWFuIGRhdGUuXG5cdFx0XHRAdGhyb3dzIEVycm9yIGlmIGFuIGludmFsaWQgZGF0ZSBvciBhIGRpZmZlcmVudCBjYWxlbmRhciB1c2VkLiAqL1xuXHRcdHRvSkQ6IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCBkYXkpIHtcblx0XHRcdHZhciBkYXRlID0gdGhpcy5fdmFsaWRhdGUoeWVhciwgbW9udGgsIGRheSwgJC5jYWxlbmRhcnMubG9jYWwuaW52YWxpZERhdGUpO1xuXHRcdFx0eWVhciA9IGRhdGUueWVhcigpO1xuXHRcdFx0aWYgKHllYXIgPCAwKSB7IHllYXIrKzsgfSAvLyBObyB5ZWFyIHplcm9cblx0XHRcdHJldHVybiBkYXRlLmRheSgpICsgKGRhdGUubW9udGgoKSAtIDEpICogMzAgK1xuXHRcdFx0XHQoeWVhciAtIDEpICogMzY1ICsgTWF0aC5mbG9vcih5ZWFyIC8gNCkgKyB0aGlzLmpkRXBvY2ggLSAxO1xuXHRcdH0sXG5cblx0XHQvKiogQ3JlYXRlIGEgbmV3IGRhdGUgZnJvbSBhIEp1bGlhbiBkYXRlLlxuXHRcdFx0QG1lbWJlcm9mIENvcHRpY0NhbGVuZGFyXG5cdFx0XHRAcGFyYW0gamQge251bWJlcn0gVGhlIEp1bGlhbiBkYXRlIHRvIGNvbnZlcnQuXG5cdFx0XHRAcmV0dXJuIHtDRGF0ZX0gVGhlIGVxdWl2YWxlbnQgZGF0ZS4gKi9cblx0XHRmcm9tSkQ6IGZ1bmN0aW9uKGpkKSB7XG5cdFx0XHR2YXIgYyA9IE1hdGguZmxvb3IoamQpICsgMC41IC0gdGhpcy5qZEVwb2NoO1xuXHRcdFx0dmFyIHllYXIgPSBNYXRoLmZsb29yKChjIC0gTWF0aC5mbG9vcigoYyArIDM2NikgLyAxNDYxKSkgLyAzNjUpICsgMTtcblx0XHRcdGlmICh5ZWFyIDw9IDApIHsgeWVhci0tOyB9IC8vIE5vIHllYXIgemVyb1xuXHRcdFx0YyA9IE1hdGguZmxvb3IoamQpICsgMC41IC0gdGhpcy5uZXdEYXRlKHllYXIsIDEsIDEpLnRvSkQoKTtcblx0XHRcdHZhciBtb250aCA9IE1hdGguZmxvb3IoYyAvIDMwKSArIDE7XG5cdFx0XHR2YXIgZGF5ID0gYyAtIChtb250aCAtIDEpICogMzAgKyAxO1xuXHRcdFx0cmV0dXJuIHRoaXMubmV3RGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIENvcHRpYyBjYWxlbmRhciBpbXBsZW1lbnRhdGlvblxuXHQkLmNhbGVuZGFycy5jYWxlbmRhcnMuY29wdGljID0gQ29wdGljQ2FsZW5kYXI7XG5cbn0pKGpRdWVyeSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
