import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import Message from '../components/Message'
import Users from '../pages/users'
import Index from '../pages/index'
import FamilyMembersPrint from '../pages/familyMembersPrint'
import RamadanPrint from '../pages/ramadanPrint'
import Login from '../pages/login'
import SideBar from '../components/Sidebar'
import ProductiveFamilies from '../pages/productiveFamilies/productiveFamilies'
const Reception = React.lazy(() => import('../pages/reception'))
const VisitReports = React.lazy(() => import('../pages/visitReports'))
const Family = React.lazy(() => import('../pages/family'))
const InteriorFamily = React.lazy(() => import('../pages/InteriorFamily'))
const FamilyMembers = React.lazy(() => import('../pages/familyMembers'))
// const Assistance = React.lazy(() => import('../pages/assistance'))
const Donation = React.lazy(() => import('../pages/donation'))
const FinancialAssistance = React.lazy(() =>
  import('../pages/financialAssistance')
)
const FoodStuffAssistance = React.lazy(() =>
  import('../pages/foodStuffAssistance')
)
const OrphanSponsors = React.lazy(() =>
  import('../pages/orphans/orphanSponsors')
)
const OrphanFamily = React.lazy(() => import('../pages/orphans/orphanFamily'))
const Orphans = React.lazy(() => import('../pages/orphans/orphans'))
const OrphansAll = React.lazy(() => import('../pages/orphans/orphansAll'))
const OrphanSponsorships = React.lazy(() =>
  import('../pages/orphans/orphanSponsorships')
)
const OrphanPayments = React.lazy(() =>
  import('../pages/orphans/orphanPayments')
)
const NoPaymentSponsors = React.lazy(() =>
  import('../pages/orphans/noPaymentSponsors')
)
const LowIncomeFamilies = React.lazy(() =>
  import('../pages/lowIncome/lowIncomeFamilies')
)
const lowIncomeSponsors = React.lazy(() =>
  import('../pages/lowIncome/lowIncomeSponsors')
)
const lowIncomeSponsorships = React.lazy(() =>
  import('../pages/lowIncome/lowIncomeSponsorship')
)
const lowIncomePayments = React.lazy(() =>
  import('../pages/lowIncome/lowIncomePayments')
)
const InsolventFamilies = React.lazy(() =>
  import('../pages/lowIncome/insolventFamilies')
)
const Borrow = React.lazy(() => import('../pages/borrow'))
const Ramadan = React.lazy(() => import('../pages/ramadan'))
const EidAlAdhaDonations = React.lazy(() =>
  import('../pages/holidays/eidAlAdhaDonations')
)
const EidAlAdhaDonationsPrint = React.lazy(() =>
  import('../pages/holidays/eidAlAdhaDonationsPrint')
)
// const LowIncomeWaitList = React.lazy(() =>
//   import('../pages/waitList/lowIncomeWaitList')
// )
// const OrphanWaitList = React.lazy(() =>
//   import('../pages/waitList/orphanWaitList')
// )
const Archived = React.lazy(() => import('../pages/archived'))
const Upload = React.lazy(() => import('../pages/upload/upload'))
const UploadInteriorFamiliesFiles = React.lazy(() =>
  import('../pages/upload/uploadInteriorFamiliesFiles')
)
const UploadSponsor = React.lazy(() => import('../pages/upload/uploadSponsor'))
const Sponsorship = React.lazy(() => import('../pages/sponsorship'))

const AuthenticatedRoute = ({ component: Component, dept, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('jwtToken') ? (
        localStorage.getItem(dept) === 'true' ? (
          <Component {...props} />
        ) : (
          <>
            (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
            ){Message('warn', 'ليس لديك الصلاحية لدخول الصفحة')}
          </>
        )
      ) : (
        <>
          (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
          ){Message('warn', 'يرجى تسجيل الدخول اولا')}
        </>
      )
    }
  />
)

const Router = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={Login} />
      <SideBar>
        <Route exact path="/" component={Index} />
        <Route exact path="/users/secret" component={Users} />
        <Route
          exact
          path="/productiveFamilies"
          component={ProductiveFamilies}
        />

        <AuthenticatedRoute
          exact
          path="/users"
          component={Users}
          dept="admin"
        />
        <Route exact path="/ramadanPrint" component={RamadanPrint} />

        {/* Archive */}
        <React.Suspense fallback={<div>loading...</div>}>
          <AuthenticatedRoute
            exact
            path="/reception"
            component={Reception}
            dept="reception"
          />
          <AuthenticatedRoute
            exact
            path="/visitReports"
            component={VisitReports}
            dept="reception"
          />
          <AuthenticatedRoute
            exact
            path="/family"
            component={Family}
            dept="reception"
          />
          <AuthenticatedRoute
            exact
            path="/interiorFamily"
            component={InteriorFamily}
            dept="temp"
          />
          <AuthenticatedRoute
            exact
            path="/uploadInteriorFamily"
            component={UploadInteriorFamiliesFiles}
            dept="temp"
          />
          <AuthenticatedRoute
            exact
            path="/familyMembers"
            component={FamilyMembers}
            dept="reception"
          />
          {/* <AuthenticatedRoute
          exact
          path="/assistance"
          component={Assistance}
          dept="reception"
        /> */}
          <AuthenticatedRoute
            exact
            path="/donation"
            component={Donation}
            dept="reception"
          />
          <AuthenticatedRoute
            exact
            path="/financialAssistance"
            component={FinancialAssistance}
            dept="reception"
          />
          <AuthenticatedRoute
            exact
            path="/foodStuffAssistance"
            component={FoodStuffAssistance}
            dept="reception"
          />
          <AuthenticatedRoute
            exact
            path="/borrow"
            component={Borrow}
            dept="reception"
          />
          <AuthenticatedRoute
            exact
            path="/archived"
            component={Archived}
            dept="reception"
          />
          <AuthenticatedRoute
            exact
            path="/upload"
            component={Upload}
            dept="reception"
          />
          <AuthenticatedRoute
            exact
            path="/uploadSponsor"
            component={UploadSponsor}
            dept="reception"
          />
          <AuthenticatedRoute
            exact
            path="/sponsorship"
            component={Sponsorship}
            dept="reception"
          />
          <AuthenticatedRoute
            exact
            path="/familyMembersPrint"
            component={FamilyMembersPrint}
            dept="reception"
          />

          {/* Orphans */}

          <AuthenticatedRoute
            exact
            path="/orphanSponsors"
            component={OrphanSponsors}
            dept="orphan"
          />
          <AuthenticatedRoute
            exact
            path="/orphanFamily"
            component={OrphanFamily}
            dept="orphan"
          />
          <AuthenticatedRoute
            exact
            path="/orphans/:orphanFamilyId"
            component={Orphans}
            dept="orphan"
          />
          <AuthenticatedRoute
            exact
            path="/orphans"
            component={OrphansAll}
            dept="orphan"
          />
          <AuthenticatedRoute
            exact
            path="/orphanSponsorships"
            component={OrphanSponsorships}
            dept="orphan"
          />
          <AuthenticatedRoute
            exact
            path="/orphanPayments"
            component={OrphanPayments}
            dept="orphan"
          />
          <AuthenticatedRoute
            exact
            path="/noPaymentSponsors"
            component={NoPaymentSponsors}
            dept="orphan"
          />

          {/* Families In need */}
          <AuthenticatedRoute
            exact
            path="/lowIncomeFamilies"
            component={LowIncomeFamilies}
            dept="lowIncome"
          />
          <AuthenticatedRoute
            exact
            path="/lowIncomeSponsors"
            component={lowIncomeSponsors}
            dept="lowIncome"
          />
          <AuthenticatedRoute
            exact
            path="/lowIncomeSponsorships"
            component={lowIncomeSponsorships}
            dept="lowIncome"
          />
          <AuthenticatedRoute
            exact
            path="/lowIncomePayments"
            component={lowIncomePayments}
            dept="lowIncome"
          />
          <AuthenticatedRoute
            exact
            path="/insolventFamilies"
            component={InsolventFamilies}
            dept="lowIncome"
          />

          {/* Holidays */}
          <AuthenticatedRoute
            exact
            path="/ramadan"
            component={Ramadan}
            dept="delegate"
          />
          <AuthenticatedRoute
            exact
            path="/eidAlAdhaDonations"
            component={EidAlAdhaDonations}
            dept="delegate"
          />
          <AuthenticatedRoute
            exact
            path="/eidAlAdhaDonationsPrint"
            component={EidAlAdhaDonationsPrint}
            dept="delegate"
          />
          {/* <AuthenticatedRoute
            exact
            path="/orphanWaitList"
            component={OrphanWaitList}
            dept="orphan"
          />
          <AuthenticatedRoute
            exact
            path="/lowIncomeWaitList"
            component={LowIncomeWaitList}
            dept="lowIncome"
          /> */}
        </React.Suspense>
      </SideBar>
    </Switch>
  </div>
)

AuthenticatedRoute.propTypes = {
  component: PropTypes.any,
  dept: PropTypes.string,
  location: PropTypes.object
}

export default Router
