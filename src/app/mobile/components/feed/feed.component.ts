import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feeds = [
    {
      user: {
        userid: "userid",
        avatar: {
          src: "/assets/icons/icon-72x72.png",
          alt: "usar-avatar"
        }
      },
      content: {
        url: {
          src: "/assets/icons/icon-72x72.png",
          alt: "aa"
        },
        desc: "123456789011121314"
      },
      details: {
        like: {
          count: 0,
          users: []
        },
        comment: {
          count: 0,
          comments: [
            {
              user: "",
              comment: ""
            }
          ]
        },
        timestamp: Date.now()
      }
    },
    {
      user: {
        userid: "userid",
        avatar: {
          src: "/assets/icons/icon-72x72.png",
          alt: "usar-avatar"
        }
      },
      content: {
        url: {
          src: "/assets/icons/icon-72x72.png",
          alt: "aa"
        },
        desc: "123456789011121314"
      },
      details: {
        like: {
          count: 0,
          users: []
        },
        comment: {
          count: 0,
          comments: [
            {
              user: "",
              comment: ""
            }
          ]
        },
        timestamp: Date.now()
      }
    },
    {
      user: {
        userid: "userid",
        avatar: {
          src: "/assets/icons/icon-72x72.png",
          alt: "usar-avatar"
        }
      },
      content: {
        url: {
          src: "/assets/icons/icon-72x72.png",
          alt: "aa"
        },
        desc: "123456789011121314"
      },
      details: {
        like: {
          count: 0,
          users: []
        },
        comment: {
          count: 0,
          comments: [
            {
              user: "",
              comment: ""
            }
          ]
        },
        timestamp: Date.now()
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
