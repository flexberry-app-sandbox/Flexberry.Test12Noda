﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test12Noda
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Test detail.
    /// </summary>
    // *** Start programmer edit section *** (testDetail CustomAttributes)

    // *** End programmer edit section *** (testDetail CustomAttributes)
    [AutoAltered()]
    [Caption("Test detail")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("testDetailE", new string[] {
            "name as \'Name\'"})]
    public class testDetail : ICSSoft.STORMNET.DataObject
    {
        
        private string fname;
        
        private IIS.Test12Noda.testMain fmain;
        
        // *** Start programmer edit section *** (testDetail CustomMembers)

        // *** End programmer edit section *** (testDetail CustomMembers)

        
        /// <summary>
        /// name.
        /// </summary>
        // *** Start programmer edit section *** (testDetail.name CustomAttributes)

        // *** End programmer edit section *** (testDetail.name CustomAttributes)
        [StrLen(255)]
        public virtual string name
        {
            get
            {
                // *** Start programmer edit section *** (testDetail.name Get start)

                // *** End programmer edit section *** (testDetail.name Get start)
                string result = this.fname;
                // *** Start programmer edit section *** (testDetail.name Get end)

                // *** End programmer edit section *** (testDetail.name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (testDetail.name Set start)

                // *** End programmer edit section *** (testDetail.name Set start)
                this.fname = value;
                // *** Start programmer edit section *** (testDetail.name Set end)

                // *** End programmer edit section *** (testDetail.name Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Test12Noda.testMain.
        /// </summary>
        // *** Start programmer edit section *** (testDetail.main CustomAttributes)

        // *** End programmer edit section *** (testDetail.main CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "main"})]
        public virtual IIS.Test12Noda.testMain main
        {
            get
            {
                // *** Start programmer edit section *** (testDetail.main Get start)

                // *** End programmer edit section *** (testDetail.main Get start)
                IIS.Test12Noda.testMain result = this.fmain;
                // *** Start programmer edit section *** (testDetail.main Get end)

                // *** End programmer edit section *** (testDetail.main Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (testDetail.main Set start)

                // *** End programmer edit section *** (testDetail.main Set start)
                this.fmain = value;
                // *** Start programmer edit section *** (testDetail.main Set end)

                // *** End programmer edit section *** (testDetail.main Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "testDetailE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View testDetailE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("testDetailE", typeof(IIS.Test12Noda.testDetail));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of testDetail.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOftestDetail CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOftestDetail CustomAttributes)
    public class DetailArrayOftestDetail : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Test12Noda.DetailArrayOftestDetail members)

        // *** End programmer edit section *** (IIS.Test12Noda.DetailArrayOftestDetail members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type testDetail by index.
        /// </summary>
        /// <summary>
        /// Adds object with type testDetail.
        /// </summary>
        public DetailArrayOftestDetail(IIS.Test12Noda.testMain ftestMain) : 
                base(typeof(testDetail), ((ICSSoft.STORMNET.DataObject)(ftestMain)))
        {
        }
        
        public IIS.Test12Noda.testDetail this[int index]
        {
            get
            {
                return ((IIS.Test12Noda.testDetail)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Test12Noda.testDetail dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
