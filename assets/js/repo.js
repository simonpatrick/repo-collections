/**
 * Created by patrick on 15/12/16.
 */

Vue.component('demo-grid',{
   template: '#grid-template',
   replace: true,
   props:{
       data: Array,
       columns: Array,
       filterKey: String
   },

    data: function(){
        var sortOrders ={};
        this.columns.forEach(function(key){
           sortOrders[key]=1
        });
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    methods:{
        sortBy:function(key){
            console.log(key)
            this.sortKey=key;
            console.log(this.sortOrders[key])
            this.sortOrders[key]=this.sortOrders[key]*-1;
        }
    }
});

var coderepos= new Vue({
   el: '#git_repositories',
   data: {
       searchQuery: '',
       columns: ['location','author','category','language','description'],
       repos: [
           { author: 'hustcc', category: 'devops' ,language:'PYTHON',location:'https://github.com/hustcc/redis-monitor.git'
               ,description:'a repo for monitoring redis server'},
           { author: 'chihongze', category: 'devops' ,language:'PYTHON',location:'https://github.com/chihongze/shard.py.git'
               ,description:'sharding python operation samples'},
           { author: 'daikeren', category: 'collections' ,language:'PYTHON,JS',location:'https://github.com/daikeren'
               ,description:'python,javascript learning repositories'},
           { author: 'daikeren', category: 'collections' ,language:'PYTHON,JS',location:'https://github.com/binux/pyspider.git'
               ,description:'python learning repositories'},
           { author: 'binux', category: 'web crawler' ,language:'PYTHON',location:'https://github.com/binux/pyspider.git'
               ,description:'a web crawler repository'},
           { author: 'Panblack', category: 'devops' ,language:'SHELL',location:'https://github.com/Panblack/ezdpl.git'
               ,description:'shell script for deployment'},
           { author: 'Shougo', category: 'devops' ,language:'VIM',location:'https://github.com/Shougo/unite.vim'
               ,description:'The unite or unite.vim plug-in can search and display information'},
           { author: 'Runscope', category: 'devops' ,language:'PYTHON',location:'https://github.com/Runscope/httpbin'
               ,description:'HTTP Request & Response Service, written in Python + Flask'
           },{ author: 'code4craft', category: 'devops' ,language:'JAVA',location:'https://github.com/code4craft/blackhole'
               ,description:'BlackHole是一个Java编写的DNS服务器'
           },{ author: 'spotify', category: 'tuning' ,language:'Javascript',location:'https://github.com/spotify/threaddump-analyzer.git'
               ,description:'Thread Dump Analyzer in a simple website'
           },{
               author: 'typicode',
               category: 'mockserver',
               language: 'Javascript',
               location: 'https://github.com/typicode/json-server.git',
               description: 'Mock Server for quick backend prototyping and mocking '
           },{
             author: 'IronSummitMedia',
             category: '前端',
             language: 'CSS',
             location: 'https://github.com/IronSummitMedia/startbootstrap-sb-admin-2.git',
             description: '一个bootstrap dashboard的参考'
           },{
             author: 'discourse',
             category: 'social',
             language: 'RUBY',
             location: 'https://github.com/discourse/discourse.git',
             description: '一个讨论论坛'
           },{
             author: 'gocd',
             category: 'CI/CD',
             language: 'JAVA',
             location: 'https://github.com/gocd',
             description: 'ThoughtWorks开源的一个CI/CD系统'
           },{
             author: 'shadowsocks',
             category: 'reading',
             language: 'Python',
             location: 'https://github.com/shadowsocks',
             description: '一个有意思的工具'
           },{
             author: 'robbyrussell',
             category: 'TOOLS,BIGNAME',
             language: 'SHELL',
             location: 'https://github.com/robbyrussell/oh-my-zsh',
             description: 'Oh-my-zsh'
           },{
             author: 'lukehutch',
             category: 'Tools,COMMON',
             language: 'JAVA',
             location: 'https://github.com/lukehutch/fast-classpath-scanner.git'
             description: 'Fask Classpath Scanner'
           },{
             author: 'RichardWarburton',
             category: 'exercises',
             language: 'JAVA',
             location: 'https://github.com/RichardWarburton/java-8-lambdas-exercises.git'
             description: 'A very good repo for Leanring JAVA8'
           },{
             author: 'davidminor',
             category: 'threaddump-analyzer',
             language: 'Ruby',
             location: 'https://github.com/davidminor/java-thread-dump-grapher.git'
             description: 'Ruby Scripts for JAVA Thread Dump'
           },{
             author: 'Cue',
             category: 'Algorithm',
             language: 'JAVA',
             location: 'https://github.com/Cue/greplin-bloom-filter.git'
             description: 'A Bloom Filter'
           },{
             author: 'NitorCreations',
             category: 'Utils',
             language: 'JAVA',
             location: 'https://github.com/NitorCreations/java8-utils.git',
             description: 'Java8 Collections Utils'
           },{
             author: 'mchr3k',
             category: 'Utils',
             language: 'JAVA',
             location: 'https://github.com/mchr3k/org.intrace.git',
             description: 'intrace for JAVA'
           },{
             author: 'mchr3k',
             category: 'Utils',
             language: 'JAVA',
             location: 'https://github.com/mchr3k/javathreaddumpanalyser.git',
             description: 'Thread Dump Analyzer for JAVA'
           },{
             author: 'ysc',
             category: 'WEB Framework',
             language: 'JAVA',
             location: 'https://github.com/ysc/APDPlat.git',
             description: 'JAVA WEB Framework'
           },{
             author: 'thobe',
             category: 'Profiling',
             language: 'JAVA',
             location: 'https://github.com/thobe/thread-dump-analysis.git'
             description: 'Another Thread Dump Analyzer'
           },{
             author: 'pretenderjs',
             category: 'Mock',
             language: 'Javascript',
             location: 'https://github.com/pretenderjs/pretender.git'
             description: 'A simple mock server for developer'
           },{
             author: 'gregmalcolm',
             category: 'Learning Python',
             language: 'Python',
             location: 'https://github.com/gregmalcolm/python_koans.git',
             description: 'A python learning repo for basic Python conception'
           },{
             author: 'riobard',
             category: 'Learning Python',
             language: 'Python',
             location: 'https://github.com/riobard/project-euler.git'
             description: 'project euler solution in python'
           },{
             author: 'domnikl',
             category: 'Learning PHP',
             language: 'PHP',
             location: 'https://github.com/domnikl/DesignPatternsPHP.git'
             description: 'Design Pattern in PHP'
           }



       ]
   }
});
