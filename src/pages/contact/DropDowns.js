import React, { Component } from 'react';
import {StyledDropDown,StyledCountryDropdown,StyledRegionDropdown,StyledText} from './style-contact';





class DropDowns extends Component {
	constructor (props) {
		super(props);

		this.getCountryValue = this.getCountryValue.bind(this);
		this.getRegionValue = this.getRegionValue.bind(this);

		// we really only need to stash the selected region + country in state, but I was feeling wacky
		this.state = {
			examples: [

				{
					label: '',
					jsx: () => {
						return (
							<StyledDropDown>
							<StyledText>Select Country and Region </StyledText>
								<StyledCountryDropdown
									value={this.getCountryValue()}
									onChange={(val) => this.selectCountry(val)}
									style={{}}
									tabIndex={1000}/>
								<StyledRegionDropdown
									country={this.getCountryValue()}
									value={this.getRegionValue()}
									onChange={(val) => this.selectRegion(val)}
									style={{
										
									}}
									tabIndex={1001}/>
					
							</StyledDropDown>
						);
					},
					codeVisible: false,
					code: "&lt;CountryDropdown\n  value=\"United States\"\n  onChange={selectCountry}\n  style={{\n    backgroundColor: 'blue',\n    color: 'white',\n    fontSize: 20\n}}\n  tabIndex={1000}\n  disabled={true} />\n&lt;RegionDropdown\n  country={country}\n  value=\"Washington\"\n  onChange={selectRegion}\n  style={{\n    backgroundColor: 'green',\n    color: 'white']\n  }}\n  tabIndex={1001}\n  disabled={true} />",
					country: '',
					region: ''
				}
            ]
		};
	}

	selectCountry (val) {
		const updatedValues = this.state.examples;
		updatedValues.country = val;
		this.setState({ examples: updatedValues });
	}

	selectRegion (val) {
		const updatedValues = this.state.examples;
		updatedValues.region = val;
		this.setState({ examples: updatedValues });
	}

	getCountryValue () {
		return this.state.examples.country;
	}

	getRegionValue () {
		return this.state.examples.region;
	}

	toggleCode () {
		const updatedValues = this.state.examples;
		updatedValues.codeVisible = !updatedValues.codeVisible;
		this.setState({ examples: updatedValues });
	}

	getExamples () {
		let i = 0;
		return this.state.examples.map((example) => {
			let j = i++;
			return (
				<section key={i}>
					<p>
						
						{example.label}
						<span className="toggleCode" title="Toggle code"
						      onClick={() => this.toggleCode(j)}></span>
					</p>
					{example.jsx()}
					<pre className="hljs html" style={{ display: example.codeVisible ? 'block' : 'none' }}>
						<code className="html" dangerouslySetInnerHTML={{ __html: example.code }}/>
					</pre>
				</section>
			);
		});
	}

	render () {
		return (
			<div>
				{this.getExamples()}
			</div>
		);
	}
}

export default DropDowns;
