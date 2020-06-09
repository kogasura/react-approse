import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admiredUser : 0,
            content : JSON.parse(localStorage.getItem('contents')),
            numbercontent : localStorage.getItem('numbercontents')
        }
        this.admiredSelect.bind(this);
        this.selectuser.bind(this);
        this.updateContent.bind(this);
        this.postContent.bind(this);

    }
    admiredSelect = (event) => {
        this.setState({ admiredUser: event.target.value });
    }

    updateContent = (event) => {
        this.setState({ content: event.target.value});
        
    }

    postContent = (event) => {
        if (this.state.content > 5) {

           localStorage.setItem('contents',this.state.content); 
           localStorage.setItem('numbercontents',this.state.numbercontent+1); 
        }
        else {
            alert('６文字以上入力してください');
        }
    }

    selectuser = (data) => {
        data = [
            { id: 0, name: "taro", countGive: 0, countGet: 0 },
            { id: 1, name: "hanako", countGive: 200, countGet: 0 },
            { id: 2, name: "toshiki", countGive: 10, countGet: 0 }
          ]

        return (
            <React.Fragment>
                <form name='user'>
                    <select name='selected' value={this.state.admiredUser} onChange={this.admiredSelect}>

                        {data.map((value) => <option value={value.id} > {value.name}</option>)}

                    </select>
                    <textarea value={this.state.contents} onChange={this.updateContent}>投稿内容を記述してください</textarea>]
                    <button onClick={this.postContent}>投稿</button>
                </form>

            </React.Fragment>
        );
    }



    render() {
        return (
        <this.selectuser />
        );
    }
}

export default Post;