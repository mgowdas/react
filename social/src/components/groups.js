import React, { Component } from 'react'
import bootstrap from 'bootstrap';

export default class extends Component {
  render() {
    return (
      <section>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="groups">
          <h1 class="page-header">Groups</h1>

          <div class="group-item">
            <img src="../../assets/img/businesslogo.JPG" />
            <h4><a routerLink="/joingroup" href="../joingroup/joingroup.component.html">Business World</a></h4>
            <p>This is a official business group of Capgemini</p>
            <p><a routerLink="/groups" class="btn btn-default"  (click)="changeText1()">{{text1}}</a></p>
           
          </div>

          <div class="clearfix"></div>

          <div class="group-item">
            <img src="../../assets/img/Human Resourses logo.JPG" />
            <h4><a routerLink="/joinhr" href="../joinhr/joinhr.component.html">H R Group</a></h4>
            <p>This is official HR Department group of Capgemini</p>
            <p><a routerLink="/groups" class="btn btn-default"  (click)="changeText2()">{{text2}}</a></p>
          </div>

          <div class="clearfix"></div>

          <div class="group-item">
            <img src="../../assets/img/l and d logo.JPG" />
            <h4><a routerLink="/joinld" href="../joinld/joinld.component.html">L & D</a></h4>
            <p>This is official L&D group of Capgemini</p>
            <p><a routerLink="/groups" class="btn btn-default"  (click)="changeText3()">{{text3}}</a></p>         
          </div>

          <div class="clearfix"></div>

          <div class="group-item">
            <img src="../../assets/img/Fresher pool.JPG" />
            <h4><a routerLink="/joinfresh" href="../joinfresh/joinfresh.component.html">Fresher Pool</a></h4>
            <p>This is official Fresher Pool group of Capgemini</p>
            <p><a routerLink="/groups" class="btn btn-default"  (click)="changeText4()">{{text4}}</a></p>
          </div>

          <div class="clearfix"></div>
        </div>
      </div>
      <!-- col-md-8 end -->

      <div class="col-md-4">
        <div class="panel panel-default friends">
          <div class="panel-heading">
            <h3 class="panel-title">My Friends</h3>
          </div>
          <div class="panel-body">
            <ul>
              <li>
                <a class="thumbnail" routerLink="profile"
                  ><img src="../../assets/img/user.png"
                /></a>
              </li>
              <li>
                <a class="thumbnail" routerLink="profile"
                  ><img src="../../assets/img/user.png"
                /></a>
              </li>
              <li>
                <a class="thumbnail" routerLink="profile"
                  ><img src="../../assets/img/user.png"
                /></a>
              </li>
              <li>
                <a class="thumbnail" routerLink="profile"
                  ><img src="../../assets/img/user.png"
                /></a>
              </li>
              <li>
                <a class="thumbnail" routerLink="profile"
                  ><img src="../../assets/img/user.png"
                /></a>
              </li>
              <li>
                <a class="thumbnail" routerLink="profile"
                  ><img src="../../assets/img/user.png"
                /></a>
              </li>
              <li>
                <a class="thumbnail" routerLink="profile"
                  ><img src="../../assets/img/user.png"
                /></a>
              </li>
              <li>
                <a class="thumbnail" routerLink="profile"
                  ><img src="../../assets/img/user.png"
                /></a>
              </li>
              <li>
                <a class="thumbnail" routerLink="profile"
                  ><img src="../../assets/img/user.png"
                /></a>
              </li>
              <li>
                <a class="thumbnail" routerLink="profile"
                  ><img src="../../assets/img/user.png"
                /></a>
              </li>
              <li>
                <a class="thumbnail" routerLink="profile"
                  ><img src="../../assets/img/user.png"
                /></a>
              </li>
              <li>
                <a class="thumbnail" routerLink="profile"
                  ><img src="../../assets/img/user.png"
                /></a>
              </li>
            </ul>
            <div class="clearfix"></div>
            <a class="btn btn-primary" routerLink="allfriends">View All Friends</a>
          </div>
        </div>

        <div class="panel panel-default groups">
          <div class="panel-heading">
            <h3 class="panel-title">Latest Groups</h3>
          </div>

          <div class="panel-body">
            <div class="group-item">
              <img src="../../assets/img/businesslogo.JPG" />
              <h4><a routerLink="/joingroup" href="../joingroup/joingroup.component.html">Business World</a></h4>
              <p>This is a official business group of Capgemini</p>
            </div>

            <div class="clearfix"></div>
            <div class="group-item">
              <img src="../../assets/img/Human Resourses logo.JPG" />
              <h4><a routerLink="/joinhr" href="../joinhr/joinhr.component.html">H R Group</a></h4>
            <p>This is official HR Department group of Capgemini</p>
            </div>

            <div class="clearfix"></div>
            <div class="group-item">
              <img src="../../assets/img/l and d logo.JPG" />
              <h4><a routerLink="/joinld" href="../joinld/joinld.component.html">L & D</a></h4>
              <p>This is official L&D group of Capgemini</p>
            </div>
            
            <div class="clearfix"></div>
            <a class="btn btn-primary"routerLink="/groups" href="../joingroup/joingroup.component.html">View All Groups</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>     
    );
  }
}
