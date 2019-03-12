constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Email created successfully...!!!!');
    
   
  }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    To:
                    <input type="text"/>
                </label>
                <br /> <br />
                <label>
                    Subject:
                    <input type="text"/>
                </label>
                <br /> <br />
                <label>
                    <textarea />
                </label>
                <br /> <br />
                <br /> <br />
                <input type="submit" value="Create"/>
            </form>
        )
    }